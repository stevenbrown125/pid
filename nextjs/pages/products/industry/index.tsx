import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../../components/Breadcrumbs";
import CTA from "../../../components/CTA";
import Layout from "../../../components/Layout";
import { allProductQuery } from "../../../lib/sanity/allProductQuery";
import client from "../../../client";
import IProduct from "../../../lib/types/IProduct";
import ProductGrid from "../../../components/ProductGrid";
import { useRouter } from "next/router";

export async function getStaticProps() {
  const products = await client.fetch(allProductQuery);
  const industries = [
    {
      name: "Ambient Air",
      image: "../images/categories/resized_ambientair.jpg",
      slug: "ambient-air",
    },
    {
      name: "Portable",
      image: "../images/categories/resized_Portables.jpg",
      slug: "portable",
    },
    {
      name: "Fixed, Continuous",
      image: "../images/categories/resized_Fixed-continuous.jpg",
      slug: "fixed-continuous",
    },
    {
      name: "Laboratory",
      image: "../images/categories/resized_Laboratory.jpg",
      slug: "laboratory",
    },
    {
      name: "Water Quality",
      image: "../images/categories/resized_waterquality.jpg",
      slug: "water-quality",
    },
  ];
  return {
    props: {
      products,
      industries,
    },
  };
}

const ProductsByIndustryGrid = (props: any) => {
  const router = useRouter();
  const { type } = router.query;
  const { products, industries } = props;
  const industry = industries.find((industry: any) => industry.slug === type);
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(
    industry ? industry.name : props.industries[0].name
  );
  useEffect(() => {
    const industry = industries.find((industry: any) => industry.slug === type);
    if (industry && selectedIndustry !== industry.name)
      setSelectedIndustry(industry.name);
  }, []);
  const sortedProducts = new Map();
  industries.forEach((industry: any) => {
    sortedProducts.set(industry.name, []);
  });

  const pages = [
    { name: "All Products", href: "/products", current: false },
    { name: "Industry", href: "/products/industry", current: true },
  ];

  products.forEach((product: IProduct) => {
    if (sortedProducts.has(product.type)) {
      sortedProducts.set(product.type, [
        ...sortedProducts.get(product.type),
        product,
      ]);
    }
  });

  const updateQueryParam = (paramKey: string, paramValue: string) => {
    const newQuery = { ...router.query, [paramKey]: paramValue };

    router.push(
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
    updateQueryParam("type", industry.slug);
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

        <div className="grid items-center justify-center grid-cols-1 mt-4 text-center lg:grid-cols-5 md:grid-cols-2 justify-items-center">
          {/* Otherwise there was search query so just return all the gases*/}
          {industries.map((industry: any) => (
            <a
              onClick={() => handleClick(industry)}
              key={`industry-${industry.slug}`}
              className={`relative z-0 hover:cursor-pointer group transform h-40 md:h-60 transition ease-in-out  ${
                selectedIndustry && industry.name === selectedIndustry
                  ? "scale-110 z-10"
                  : "h-40 md:h-60"
              }`}
            >
              <p
                className={`absolute z-10 w-full text-2xl font-extrabold text-center text-white top-1/3 md:top-1/2 md:text-3xl lg:text-2xl filter drop-shadow`}
              >
                {industry.name}
              </p>
              <img
                className={`object-cover h-full ${
                  selectedIndustry && industry.name === selectedIndustry
                    ? "brightness-75"
                    : "group-hover:grayscale-0 grayscale brightness-50 "
                }`}
                src={industry.image}
                alt="Laboratory"
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
