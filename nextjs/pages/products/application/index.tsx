import React from "react";
import Breadcrumbs from "../../../components/Breadcrumbs";
import CTA from "../../../components/CTA";
import Layout from "../../../components/Layout";
import client from "../../../client";
import ProductGrid from "../../../components/ProductGrid";
import { allMultigasQuery } from "../../../lib/sanity/allMultigasQuery";
import Link from "next/link";

export async function getStaticProps() {
  //   const products = await client.fetch(allMultigasQuery);
  return {
    props: {
      //   products,
    },
  };
}

const ProductsByApplicationGrid = ({ products }: any) => {
  const pages = [
    { name: "All Products", href: "/products", current: false },
    { name: "Application", href: "/products/application", current: true },
  ];

  return (
    <Layout>
      <section className="relative px-4 py-6 pb-10 mx-auto sm:px-12 lg:px-16 lg:max-w-7xl ">
        <div className="text-base ">
          <h2 className="font-semibold leading-6 tracking-wide text-red-600 uppercase">
            Products
          </h2>
          <h3 className="text-3xl font-extrabold leading-8 tracking-tight text-stone-800 sm:text-4xl">
            Analyzers by Application
          </h3>
          <Breadcrumbs pages={pages} />
        </div>
        <article className="mt-8">
          <h2 className="text-3xl py-4 font-semibold">
            Page Under Construction
          </h2>
          <p className="px-4">
            This page is still under development. Thank you for your patience!
            Please feel free to{" "}
            <Link href="/contact" className="text-red-600 hover:underline">
              contact us
            </Link>{" "}
            with any questions!
          </p>
          <img
            src="https://res.cloudinary.com/hnu/image/upload/v1704654018/gys9cocf45wlwvu7ubbi.jpg"
            alt="page under construction"
          />
          {/* <ProductGrid products={products} /> */}
        </article>
      </section>
      <CTA />
    </Layout>
  );
};

export default ProductsByApplicationGrid;
