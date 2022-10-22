import { PortableText } from '@portabletext/react';
import groq from 'groq';
import Link from 'next/link';
import React from 'react';
import { MdSearch } from 'react-icons/md';
import client from '../../../client';
import Breadcrumbs from '../../../components/Breadcrumbs';
import CTA from '../../../components/CTA';
import Layout from '../../../components/Layout';
import ProductGrid from '../../../components/ProductGrid';
import { allGasQuery } from '../../../lib/sanity/allGasQuery';

export async function getStaticProps({ params }: any) {
  const gas = await client.fetch(
    groq`*[_type=="gas" && slug.current==$slug]{
      name,
      "id": _id,
      symbol,
      "gasSlug": slug.current,
      description,
      "products": *[_type=="product" && references(^._id)]{ 
        title,
      "slug":slug.current,
      description,
      "id": _id,
      "image": image.asset->url}
    }
`,
    { slug: params.slug }
  );
  return {
    props: {
      gas,
      appId: process.env.SQ_APP_ID,
      locationId: process.env.SQ_LOCATION_ID,
    },
  };
}

export async function getStaticPaths() {
  const gases = await client.fetch(allGasQuery);
  const paths = gases.map((gas: any) => {
    const slug = gas.slug;
    return {
      params: {
        slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

const ProductsByGasPage = (props: any) => {
  const gas = props.gas[0];
  const products = gas.products;
  const pages = [
    { name: 'All Products', href: '/products', current: false },
    { name: 'Primary Gas', href: '/products/gas', current: false },
    {
      name: gas.name,
      href: `/products/gas/${gas.slug}`,
      current: true,
    },
  ];

  return (
    <Layout>
      <section className="relative px-4 py-6 pb-10 mx-auto sm:px-12 lg:px-16 lg:max-w-7xl ">
        <div className="text-base ">
          <h2 className="font-semibold leading-6 tracking-wide text-red-600 uppercase">
            Products
          </h2>
          <h3 className="text-3xl font-extrabold leading-8 tracking-tight text-stone-800 sm:text-4xl">
            {gas.name} analyzers
          </h3>
          <Breadcrumbs pages={pages} />
        </div>
        {products.length === 0 ? (
          <>
            <p className="pb-8">
              Unfortunately, we currently do not have any analyzers that measure{' '}
              <span className="font-semibold">{gas.name}</span>.
            </p>
            <Link href="/products">
              <a className="flex items-center max-w-xs p-2 mb-4 mr-2 font-semibold text-white bg-red-500 rounded-md hover:bg-red-700">
                <MdSearch className="w-5 h-5 mr-1 white" />
                New Search
              </a>
            </Link>
          </>
        ) : (
          <ProductGrid products={products} />
        )}
        <dl className="flex mt-10 border rounded-md border-neutral-200 bg-neutral-100 ">
          <dt className="p-4 text-5xl font-extrabold text-red-700">
            <PortableText value={gas.symbol} />
          </dt>
          <dd className="p-4 text-neutral-600">
            <span className="font-bold">{gas.name}</span>
            <PortableText value={gas.description} />
          </dd>
        </dl>
      </section>

      <CTA />
    </Layout>
  );
};
export default ProductsByGasPage;
