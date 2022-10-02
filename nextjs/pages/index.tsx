import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/Layout'
import PaymentForm from '../components/PaymentForm'
import LogoCloud from '../components/LogoCloud'
import client from '../client'
import { allProductQuery } from '../lib/sanity/allProductQuery'
import IndustryGrid from '../components/IndustryGrid'
import ResponsibleBlurb from '../components/ResponsibleBlurb'
import LastestNews from '../components/LatestNews'
import { allPostQuery } from '../lib/sanity/allPostQuery'
import CTA from '../components/CTA'

export async function getStaticProps() {
  const data = await client.fetch(allProductQuery)
  const posts = await client.fetch(allPostQuery)

  return {
    props: {
      data,
      posts,
      appId: process.env.SQ_APP_ID,
      locationId: process.env.SQ_LOCATION_ID
    }
  }
}

// <PaymentForm appId={props.appId} locationId={props.locationId} />

const Home: NextPage = (props: any) => {
  return (
    <Layout>
      <div className="relative z-0 pt-6 overflow-hidden shadow-lg">
        <div className="">
          <div className="relative z-20 -pb-2 sm:pb-16 md:w-3/5 xl:w-1/2 xl:ml-20 lg:pb-28 xl:pb-32">
            <section className="sm:mt-4 lg:mt-12 xl:mt-20">
              <div className="text-center lg:text-right md:pl-4">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl xl:mr-0">
                  <span className="block ">Air, water, or gas</span>
                  <span className="block text-4xl font-extrabold text-red-500 sm:text-6xl md:text-5xl lg:text-6xl xl:text-7xl">
                    We&apos;ve got a sensor
                  </span>
                </h1>
                <p className="px-4 mt-3 text-center text-gray-500 text-md lg:text-right sm:mt-5 lg:text-lg xl:text-xl sm:mx-auto md:mt-5 md:px-6 lg:px-0 xl:mr-10 lg:max-w-xl xl:max-w-2xl">
                  Our sensor technologies include photoionization, infrared,
                  electrochemistry, catalytic combustion, flame ionization,
                  capacitance, thermal conductivity, process gas chromatography.
                  Many of our analyzers are multifunctional and include multiple
                  technologies.
                </p>
                <div className="justify-center mt-5 sm:mt-8 sm:flex lg:justify-end lg:mr-10 xl:mr-20">
                  <div className="rounded-md shadow">
                    <Link href="/request-a-quote">
                      <a className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-red-600 border border-transparent sm:rounded-md hover:bg-red-800 md:py-4 lg:text-lg md:px-10">
                        Request a Quote
                      </a>
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link href="/products">
                      <a className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-red-700 bg-red-200 border border-transparent sm:rounded-md hover:bg-red-300 md:py-4 lg:text-lg md:px-10">
                        View our Products
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <svg
            className="absolute inset-y-0 z-10 hidden w-48 h-full transform translate-x-1/2 md:block right-1/2 -mr-28 xl:w-1/4 xl:-mr-4 text-neutral-50 "
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="0,0 100,0 50,100 0,100" />
          </svg>
        </div>
        <div className="md:absolute md:inset-y-0 md:right-0 md:w-3/5 xl:w-3/5 -mr-36 xl:-mr-20 =filter shadow-inner">
          <Image
            className="object-cover object-right w-full h-56 shadow-inner sm:h-72 md:w-full md:h-full filter"
            src="/images/lighthouse.jpg"
            alt="PID Analyzers Sandwich, MA"
            width={1200}
            height={700}
          />
        </div>
      </div>
      <LogoCloud />
      <LastestNews posts={props.posts} />
      <IndustryGrid />
      <ResponsibleBlurb />
      <CTA />
    </Layout>
  )
}

export default Home
