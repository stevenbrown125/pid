import Link from 'next/link'

const ResponsibleBlurb = () => {
  return (
    <div className="relative border-red-800 bg-neutral-800 border-y">
      <div className="h-56 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img
          className="object-cover w-full h-full"
          src="https://images.unsplash.com/photo-1610011562488-ef1d8e1a3794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60"
          alt=""
        />
      </div>
      <div className="relative px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <h2 className="text-base font-semibold tracking-wider text-red-700 uppercase">
            As a company
          </h2>
          <p className="mt-2 text-3xl font-extrabold tracking-wide text-neutral-100 sm:text-4xl">
            We take responsibility
          </p>
          <p className="mt-3 text-lg text-gray-300">
            The basis of our operations is to provide the global market with the
            most reliable measuring instruments in our area of expertise. We
            constantly monitor the emerging markets in the industry, familiarize
            ourselves with the equipment offering and develop the best products
            for the market. The products we create are carefully selected,
            tested in global conditions and are designed for technical
            superiority. This mindset and lengthy process are an important part
            of our operations as a responsible company.
          </p>
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              <Link href="/company">
                <a className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-gray-900 bg-white border border-transparent rounded-md hover:bg-neutral-200">
                  Our Company
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResponsibleBlurb
