import { NextApiRequest, NextApiResponse } from 'next';
import IProduct from '../../types/IProduct';
import client from '../../client';
import groq from 'groq';
import { toPlainText } from '@portabletext/react';

const allProductQuery = groq`
*[_type=="product"]{
    title,
    description,
    specifications,
    features,
    "id": _id,
    "slug": slug.current,
  }
  `;

const getProducts = async () => {
  const data = await client.fetch(allProductQuery);
  return data;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  //TODO: cache products

  let products = await getProducts();
  const query =
    req.body.query === undefined ? '' : req.body.query.toString().toLowerCase();
  let results = [];
  if (query.length > 3) {
    results = products.filter((product: IProduct) => {
      // Does Title Match
      if (product.title.toLowerCase().includes(query)) {
        return true;
      }
      // Does Description Match
      if (product.description) {
        if (toPlainText(product.description).toLowerCase().includes(query))
          return true;
      }
      // Does Feature Match
      if (product.features) {
        for (let i = 0; i < product.features.length; i++) {
          if (product.features[i].name.toLowerCase().includes(query))
            return true;
          if (product.features[i].description) {
            if (
              toPlainText(product.features[i].description)
                .toLowerCase()
                .includes(query)
            )
              return true;
          }
        }
      }
      // Does Specification Match
      if (product.specifications) {
        for (let i = 0; i < product.specifications.length; i++) {
          if (product.specifications[i].name.toLowerCase().includes(query))
            return true;
          if (
            toPlainText(product.specifications[i].description)
              .toLowerCase()
              .includes(query)
          )
            return true;
        }
      }
      return false;
    });
  }

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ results }));
};
