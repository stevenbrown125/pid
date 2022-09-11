import Link from 'next/link'
import { GiSteam } from 'react-icons/gi'
import { IoAnalyticsOutline } from 'react-icons/io5'
import { MdOutlineMultilineChart, MdDevicesOther } from 'react-icons/md'
import Layout from '../components/Layout'
import { allProductQuery } from '../lib/sanity/allProductQuery'
import client from '../client'
import { NextPage } from 'next'
import ProductGrid from '../components/ProductGrid'
import Breadcrumbs from '../components/Breadcrumbs'
import Seo from '../components/SEO'

export async function getStaticProps() {
  const data = await client.fetch(allProductQuery)
  return {
    props: {
      data,
      appId: process.env.SQ_APP_ID,
      locationId: process.env.SQ_LOCATION_ID
    }
  }
}

const pages = [{ name: 'All Products', href: '/products', current: true }]

const ProductPage: NextPage = (props: any) => {
  return (
    <Layout>
      <Seo
        title="All Products"
        description="Our sensor technologies include photoionization, infrared, electrochemistry, catalytic combustion, flame ionization, capacitance, thermal conductivity, process gas chromatography. Many of our analyzers are multifunctional and include multiple technologies."
      />
      <section className="relative px-4 pt-4 mx-auto bg-white shadow-md sm:px-12 lg:px-16 lg:max-w-7xl">
        <Breadcrumbs pages={pages} />
        {/* Grid */}
        <div className="grid items-center justify-center grid-cols-1 text-center lg:grid-cols-4 md:grid-cols-2 justify-items-center">
          <Link href="/products/primary-gas">
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
    </Layout>
  )
}

export default ProductPage
