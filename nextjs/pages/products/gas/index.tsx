import { PortableText, toPlainText } from '@portabletext/react'
import Link from 'next/link'
import React, { SyntheticEvent, useState } from 'react'
import { MdSearch } from 'react-icons/md'
import client from '../../../client'
import Breadcrumbs from '../../../components/Breadcrumbs'
import Layout from '../../../components/Layout'
import { allGasQuery } from '../../../lib/sanity/allGasQuery'
import { IGas } from '../../../types/IGas'

export async function getStaticProps() {
  const gases = await client.fetch(allGasQuery)
  return {
    props: {
      gases,
      appId: process.env.SQ_APP_ID,
      locationId: process.env.SQ_LOCATION_ID
    }
  }
}

const ProductsByGasPage = (props: any) => {
  const pages = [
    { name: 'All Products', href: '/products', current: false },
    { name: 'Primary Gas', href: '/products/primary-gas', current: true }
  ]
  const gases: IGas[] = props.gases
  const [state, setState] = useState<{ filteredData: IGas[]; query: string }>({
    filteredData: [],
    query: ''
  })

  const { filteredData, query } = state

  const handleInputChange = (event: any) => {
    const query = (event.target as HTMLInputElement).value
    const filteredData = gases.filter((gas: IGas) => {
      const { name, symbol } = gas
      return (
        name.toLowerCase().includes(query.toLowerCase()) ||
        toPlainText(symbol).toLowerCase().includes(query.toLowerCase())
      )
    })
    setState({
      query,
      filteredData
    })
  }

  return (
    <Layout>
      <div className="relative px-4 py-4 mx-auto bg-white shadow-md sm:px-12 lg:px-16 lg:max-w-7xl">
        <Breadcrumbs pages={pages} />

        <div className="max-w-5xl mx-8 my-2">
          <label
            htmlFor="search"
            className="block text-sm font-medium text-gray-700 sm:text-md"
          >
            Filter by Gas
            <div className="relative flex items-center mt-1">
              <input
                type="text"
                name="search"
                id="search"
                aria-label="Search"
                placeholder="Type to filter ..."
                onChange={handleInputChange}
                className="block w-full pr-12 text-sm border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-md"
              />
            </div>
          </label>
        </div>
        {/* Grid */}

        {filteredData.length === 0 ? (
          <div>
            {
              // Check to see if there is text in the filter box,
              // if there is then there are no results
              query ? (
                <p>
                  Sorry! That search produced no results. Try entering something
                  else or
                  <Link href="/contact">
                    <a className="ml-1 text-red-600 hover:text-red-800">
                      contact us
                    </a>
                  </Link>
                  .
                </p>
              ) : (
                <div className="grid items-center justify-center grid-cols-1 text-center lg:grid-cols-4 md:grid-cols-2 justify-items-center">
                  {gases.map((gas) => (
                    <Link href={`/products/gas/${gas.slug}`} key={gas.id}>
                      <a className="w-full h-full px-8 py-12 border hover:bg-neutral-100">
                        <span className='className="py-4 text-5xl font-extrabold text-neutral-500'>
                          <PortableText value={gas.symbol} />
                        </span>
                        <p className="py-4 font-medium text-neutral-800">
                          {gas.name}
                        </p>
                      </a>
                    </Link>
                  ))}
                </div>
              )
            }
          </div>
        ) : (
          <div className="grid items-center justify-center grid-cols-1 mt-4 text-center lg:grid-cols-4 md:grid-cols-2 justify-items-center">
            {/* Otherwise there was search query so just return all the gases*/}
            {filteredData.map((gas: IGas) => (
              <Link href={`/products/gas/${gas.slug}`} key={gas.id}>
                <a className="w-full h-full px-8 py-12 md:py-20 hover:bg-neutral-100 group">
                  <span className="py-4 text-5xl font-extrabold text-neutral-500 group-hover:text-red-800">
                    <PortableText value={gas.symbol} />
                  </span>
                  <p className="py-4 font-medium text-neutral-800 group-hover:text-red-700">
                    {gas.name}
                  </p>
                </a>
              </Link>
            ))}
          </div>
        )}
      </div>
    </Layout>
  )
}
export default ProductsByGasPage
