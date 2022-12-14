import Link from 'next/link';
import { GiSteam } from 'react-icons/gi';
import { IoAnalyticsOutline } from 'react-icons/io5';
import { MdOutlineMultilineChart, MdDevicesOther } from 'react-icons/md';
import Layout from '../../components/Layout';
import { allProductQuery } from '../../lib/sanity/allProductQuery';
import client from '../../client';
import { NextPage } from 'next';
import ProductGrid from '../../components/ProductGrid';
import Breadcrumbs from '../../components/Breadcrumbs';
import Seo from '../../components/SEO';
import CTA from '../../components/CTA';

export async function getStaticProps() {
  const data = await client.fetch(allProductQuery);
  return {
    props: {
      data,
      appId: process.env.SQ_APP_ID,
      locationId: process.env.SQ_LOCATION_ID,
    },
  };
}

const pages = [{ name: 'All Products', href: '/products', current: true }];

const ProductPage: NextPage = (props: any) => {
  return (
    <Layout>
      <Seo
        title="All Products"
        description="Our sensor technologies include photoionization, infrared, electrochemistry, catalytic combustion, flame ionization, capacitance, thermal conductivity, process gas chromatography. Many of our analyzers are multifunctional and include multiple technologies."
      />
      <section className="relative px-4 py-6 pb-10 mx-auto sm:px-12 lg:px-16 lg:max-w-7xl ">
        <div className="text-base">
          <h2 className="font-semibold leading-6 tracking-wide text-red-600 uppercase">
            Products
          </h2>
          <h3 className="text-3xl font-extrabold leading-8 tracking-tight text-stone-800 sm:text-4xl">
            Catalog
          </h3>
          <Breadcrumbs pages={pages} />
        </div>
        <p className="pb-2 text-neutral-700">
          PID Analyzers develops sensors & analyzers for air, water and process
          applications and sells these products worldwide. The sensor
          technologies include photoionization, infrared, electrochemistry,
          catalytic combustion, flame ionization, capacitance, thermal
          conductivity, process gas chromatography. Many of our analyzers are
          multifunctional and include multiple technologies.
        </p>
        {/* Grid */}
        <div className="grid items-center justify-center grid-cols-1 py-8 text-center lg:grid-cols-4 md:grid-cols-2 justify-items-center">
          <Link href="/products/gas">
            <a className="w-full h-full px-8 py-12 border md:py-20 hover:bg-neutral-100">
              <GiSteam className="w-20 h-20 mx-auto text-neutral-400" />
              <p className="py-4 font-medium text-neutral-800">
                By Primary Gas to be Measured
              </p>
            </a>
          </Link>
          <Link href="/products/">
            <a className="w-full h-full px-8 py-12 border border-l-0 md:py-20 hover:bg-neutral-100">
              <IoAnalyticsOutline className="w-20 h-20 mx-auto text-neutral-400" />
              <p className="py-4 font-medium text-neutral-800">
                By Application
              </p>
            </a>
          </Link>
          <Link href="/products/">
            <a className="w-full h-full px-8 py-12 border border-l-0 md:py-20 hover:bg-neutral-100">
              <MdDevicesOther className="w-20 h-20 mx-auto text-neutral-400" />
              <p className="py-4 font-medium text-neutral-800">By Industry</p>
            </a>
          </Link>
          <Link href="/products/">
            <a className="w-full h-full px-8 py-12 border border-l-0 md:py-20 hover:bg-neutral-100">
              <MdOutlineMultilineChart className="w-20 h-20 mx-auto text-neutral-400" />
              <p className="py-4 font-medium text-neutral-800">
                Multigas Analyzers
              </p>
            </a>
          </Link>
        </div>
        <ProductGrid products={props.data} />
      </section>
      <CTA />
    </Layout>
  );
};

export default ProductPage;
