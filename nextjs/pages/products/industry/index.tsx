import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../../components/Breadcrumbs";
import CTA from "../../../components/CTA";
import Layout from "../../../components/Layout";
import { allProductQuery } from "../../../lib/sanity/allProductQuery";
import client from "../../../client";
import ProductGrid from "../../../components/ProductGrid";
import { useRouter } from "next/router";
import { allIndustryQuery } from "../../../lib/sanity/allIndustryQuery";
import IProduct from "../../../lib/types/IProduct";

export async function getStaticProps() {
  const products = await client.fetch(allProductQuery);
  const industries = await client.fetch(allIndustryQuery);

  return {
    props: {
      products,
      industries,
    },
  };
}

const ProductsByIndustryGrid = (props: any) => {
  const router = useRouter();
  const { products, industries } = props;
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);

  useEffect(() => {
    const { industry } = router.query;
    if (industry) {
      const urlIndustry = industries.find(
        (i: any) => i.slug === industry
      );
      if (industry && selectedIndustry !== urlIndustry.name)
        setSelectedIndustry(urlIndustry.name);
    } else {
      setSelectedIndustry(props.industries[0].name);
    }
  }, [router.query]);

  const sortedProducts = new Map();
  industries.forEach((industry: any) => {
    sortedProducts.set(industry.name, []);
  });

  const pages = [
    { name: "All Products", href: "/products", current: false },
    { name: "Industry", href: "/products/industry", current: true },
  ];

  products.forEach((product: IProduct) => {
    if(product.industries)
      product.industries.forEach((industry) => {
        if (sortedProducts.has(industry)) {
          sortedProducts.set(industry, [...sortedProducts.get(industry), product]);
        } else {
          sortedProducts.set(industry, [product]);
        }
      });
  });
  
  const updateQueryParam = (paramKey: string, paramValue: string) => {
    const newQuery = { ...router.query, [paramKey]: paramValue };

    router.replace(
      {
        pathname: router.pathname,
        query: newQuery,
      },
      undefined,
      { shallow: true }
    );
  };

  const handleClick = (industry: any) => {
    setSelectedIndustry(industry.name);
    updateQueryParam("industry", industry.slug);
  };

  return (
    <Layout>
      <section className="relative px-4 py-6 pb-10 mx-auto sm:px-12 lg:px-16 lg:max-w-7xl ">
        <div className="text-base ">
          <h2 className="font-semibold leading-6 tracking-wide text-red-600 uppercase">
            Products
          </h2>
          <h3 className="text-3xl font-extrabold leading-8 tracking-tight text-stone-800 sm:text-4xl">
            Analyzers by Industry
          </h3>
          <Breadcrumbs pages={pages} />
        </div>

        <div className="grid items-center justify-center grid-cols-1 mt-4 text-center md:grid-cols-5 justify-items-center">
          {/* Otherwise there was search query so just return all the gases*/}
          {industries.map((industry: any) => (
            <a
              onClick={() => handleClick(industry)}
              key={`industry-${industry.slug}`}
              className={`relative z-0 hover:cursor-pointer group transform h-24 md:h-60 transition ease-in-out  w-full ${
                selectedIndustry && industry.name === selectedIndustry
                  ? "lg:scale-110 z-10"
                  : ""
              }`}
            >
              <p
                className={`absolute z-10 w-full text-lg font-extrabold text-center text-white top-1/3 md:top-1/3 md:text-xl px-4 lg:text-2xl filter drop-shadow`}
              >
                {industry.name}
              </p>
              <img
                className={`object-cover object-center h-full w-full ${
                  selectedIndustry && industry.name === selectedIndustry
                    ? "brightness-75"
                    : "group-hover:grayscale-0 grayscale brightness-50 "
                }`}
                src={industry.image}
                alt={industry.name}
              />
            </a>
          ))}
        </div>
        {selectedIndustry && (
          <article className="mt-8">
            <h3 className="text-xl font-extrabold leading-8 tracking-tight text-stone-800 sm:text-2xl">
              <span className="text-red-600">{selectedIndustry}</span> Analyzers
            </h3>
            <ProductGrid products={sortedProducts.get(selectedIndustry)} />
          </article>
        )}
      </section>
      <CTA />
    </Layout>
  );
};
export default ProductsByIndustryGrid;
