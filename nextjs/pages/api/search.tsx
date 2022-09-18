import { NextApiRequest, NextApiResponse } from 'next'
import IProduct from '../../types/IProduct'
import client from '../../client'
import groq from 'groq'

export const allProductQuery = groq`

//TODO: Refine
*[_type=="product"]{
    title,
    description,
    specifications,
    features,
    "id": _id,
    "slug": slug.current,
  }
  `
const getProducts = async () => {
  const data = await client.fetch(allProductQuery)
  return data
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  //TODO: cache products

  let products = await getProducts()

  const query =
    req.body.query === undefined ? '' : req.body.query.toString().toLowerCase()
  let results = []
  if (query.length > 3) {
    results = products.filter((product) => {
      // Does Title Match
      if (product.title.toLowerCase().includes(query)) {
        return true
      } else if (product.description) {
        // Does Description Match
        const results =
          product.description &&
          product.description.filter((desc) => {
            const results = desc.children.filter((child) =>
              child.text.toLowerCase().includes(query)
            )
            return results.length == 0 ? false : true
          })
        if (results.length != 0) return true
      } else if (product.features) {
        // Does Feature Match
        const results = product.features.filter((feat) => {
          const results = feat.name.toLowerCase().includes(query)

          return results.length == 0 ? false : true
        })
        if (results.length != 0) return true
      }
      return false
    })
  }

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ results }))
}
