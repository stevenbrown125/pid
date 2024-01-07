import { PortableText } from "@portabletext/react";
import groq from "groq";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { BsClipboardCheck } from "react-icons/bs";
import client from "../../client";
import Layout from "../../components/Layout";
import { allProductQuery } from "../../lib/sanity/allProductQuery";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import Seo from "../../components/SEO";
import Subscript from "../../components/text/Subscript";
import Supscript from "../../components/text/Supscript";

export async function getStaticProps({ params }: any) {
  const product = await client.fetch(
    groq`*[_type=="product" && slug.current==$slug]{
    title,
    description,
    "id": _id,
    "image": image.secure_url,
    specifications,
    features,
    "slug": slug.current,
    "pdf": pdf.asset->url
  }`,
    { slug: params.slug }
  );
  return {
    props: {
      product: product[0],
    },
  };
}

export async function getStaticPaths() {
  const products = await client.fetch(allProductQuery);
  const paths = products.map((product: any) => {
    const slug = product.slug;
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

const Product: NextPage = ({ product }: any) => {
  return (
    <Layout>
      <Seo title={product.title} description={product?.SEODescription} />
      <section className="-mt-1 bg-neutral-50">
        <div className="container mx-auto bg-white shadow-sm sm:px-8 max-w-7xl lg:px-12 border-x border-neutral-100">
          <div className="pb-8">
            <div className="grid grid-cols-1 pt-8 md:grid-cols-5">
              <div className="flex flex-col order-2 col-span-3 px-10 pt-8 md:order-1 ">
                <h1 className="flex-shrink-0 text-3xl font-extrabold tracking-tight text-center text-neutral-900 sm:text-4xl">
                  {product.title}
                </h1>
                <h2 id="information-heading" className="sr-only">
                  Product information
                </h2>

                <div className="my-4 space-y-6 text-base text-neutral-500">
                  {product.description && (
                    <PortableText
                      value={product.description}
                      components={{
                        marks: { sub: Subscript, sup: Supscript },
                      }}
                    />
                  )}
                </div>
                <div className="self-end w-full pb-10">
                  <Link
                    href={{
                      pathname: `/request-a-quote`,
                      query: { slug: product.slug },
                    }}
                    className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-50 focus:ring-red-700"
                  >
                      Request a Quote
                  </Link>
                </div>
              </div>
              <div className="relative order-1 col-span-2 mx-20 md:order-2">
                <div className="relative aspect-w-2 aspect-h-3">
                  {product.image ? <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 100vw"
                    style={{
                      objectFit: "contain",
                    }}
                  /> :  <Image
                  src="https://res.cloudinary.com/hnu/image/upload/v1659747194/image-coming-soon-placeholder-768x768_hgwfpx.png"
                  alt={`${product.title} image coming soon`}
                  sizes="(max-width: 768px) 100vw, 100vw"
                  fill
                  priority
                  style={{
                    objectFit: "contain",}}
                /> }
                </div>
              </div>
            </div>
          </div>
          {product.specifications && (
            <div className="p-4 border-t border-neutral-200">
              <h4 className="flex items-center justify-center mr-8 text-4xl font-extrabold tracking-tight text-neutral-800 md:justify-start">
                <BsClipboardCheck className="w-12 h-12 mr-4 text-green-600 " />
                Specifications
              </h4>
              <div className="grid grid-cols-1 my-4 text-neutral-700 md:grid-cols-2 lg:grid-cols-3 ">
                {product.specifications.map((spec: any) => (
                  <div className="pt-4 pb-8 pl-6 pr-4" key={spec.name}>
                    <dl>
                      <dt className="pb-2 font-semibold">{spec.name}</dt>
                      <dd className="px-2 text-neutral-600 ">
                        <PortableText
                          value={spec.description}
                          components={{
                            marks: { sub: Subscript, sup: Subscript },
                          }}
                        />
                      </dd>
                    </dl>
                  </div>
                ))}
              </div>
            </div>
          )}

          {product.features && (
            <div className="p-4 border-t border-neutral-200 ">
              <h4 className="flex items-center justify-center mr-8 text-4xl font-extrabold tracking-tight text-neutral-800 md:justify-start">
                <HiOutlineBadgeCheck className="w-12 h-12 mr-4 text-green-600" />
                Features
              </h4>
              <div className="grid grid-cols-1 my-4 text-neutral-700 md:grid-cols-2 lg:grid-cols-3 ">
                {product.features.map((spec: any) => (
                  <div className="pt-4 pb-8 pl-6 pr-4" key={spec.name}>
                    <dl>
                      <dt className="pb-2 font-semibold">{spec.name}</dt>
                      <dd className="px-2 text-neutral-600 ">
                        <PortableText value={spec.description} />
                      </dd>
                    </dl>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
      <div className="p-12 shadow-inner bg-[#fff7d3]">
        <div className="mx-auto lg:max-w-5xl ">
          <h4 className="flex items-center justify-center text-3xl font-extrabold tracking-tight text-neutral-800 sm:text-4xl">
            <svg viewBox="0 0 495 495" className="mr-4 text-red-500 max-h-12">
              <polygon
                fill="currentColor"
                points="247.5,0 247.5,40 455,40 455,455 247.5,455 247.5,495 495,495 495,0"
              />
              <polygon
                fill="currentColor"
                points="40,455 40,40 247.5,40 247.5,0 0,0 0,495 247.5,495 247.5,455"
              />
              <path
                fill="currentColor"
                d="M92.583,393.755l12.569,7.496c2.582,2.457,5.04,2.457,10.079,2.457 c20.192,0,45.392-25.105,75.663-77.993c2.489-2.583,2.489-2.583,5.072-2.583c25.074-10.112,57.928-15.151,100.767-20.192 c25.232,12.663,55.378,17.734,75.537,17.734c10.112,0,17.735-2.583,22.775-5.071c4.913-5.04,7.496-12.663,9.954-15.119 c0-5.041,0-10.081-2.458-15.152c-7.496-12.663-27.688-17.577-57.96-17.577c-10.08,0-20.159,2.458-32.728,2.458 c-10.079-5.041-15.12-10.08-22.742-15.12c-15.152-15.151-30.145-37.8-40.256-65.488v-2.584c10.111-32.729,17.607-73.08,0-90.688 c-5.041-2.583-10.08-5.04-15.12-5.04h-5.041c-10.11,0-17.734,10.111-20.19,20.192c-10.08,35.185-5.04,52.92,5.039,83.191 c-7.496,22.616-15.119,47.848-27.688,73.079c-10.08,17.577-17.702,32.729-25.231,45.266c-10.079,5.071-17.576,10.112-22.617,12.695 C107.734,343.291,92.583,365.939,90,378.603c0,5.072,0,7.528,2.583,12.569V393.755z M332.046,285.332h4.914 c35.31,0,45.422,7.529,48.005,10.111c0,2.458,2.457,2.458,2.457,2.458v2.583h-7.529c-12.662,0-30.271-5.041-47.848-12.664V285.332z M228.694,103.861c2.458,0,2.458-2.458,2.458-2.458l2.583,2.458v2.582c2.456,2.458,2.456,12.538,0,25.231v5.041 c0,7.496-2.583,12.537-5.041,22.617C223.623,136.715,223.623,118.981,228.694,103.861z M206.046,277.708 c9.954-22.617,20.065-42.809,25.105-60.417c10.08,22.649,25.231,42.84,37.894,57.96c2.458,2.457,4.914,5.04,9.954,7.497 c-20.034,2.583-50.306,10.112-83.033,22.774h-5.072C195.966,295.442,201.006,287.819,206.046,277.708z M140.464,340.708 c2.583-2.456,7.497-5.04,12.536-7.497c-14.993,30.271-30.145,45.392-45.266,47.881 C110.192,373.563,122.854,355.859,140.464,340.708z"
              />
            </svg>
            <span className="">Want more information?</span>
          </h4>
          <div
            className={`${
              product?.pdf ? "md:grid-cols-3" : "max-w-sm mx-auto"
            } grid grid-cols-1 md:p-8 py-8 items-center`}
          >
            {product.pdf ? (
              <>
                <div className="w-full">
                  <a
                    href={product?.pdf}
                    target="_blank"
                    className={`${
                      product.pdf
                        ? "bg-red-600 hover:bg-red-700 "
                        : "bg-neutral-400"
                    } flex items-center text-center justify-center w-full px-8 py-3 text-base font-medium text-white border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-50 focus:ring-red-700`}
                    rel="noreferrer"
                  >
                    {product.pdf
                      ? "Check out our Brochure"
                      : "Brochure not available"}
                  </a>
                </div>
                <div className="py-4 text-2xl font-bold text-center">
                  <p>OR</p>
                </div>
              </>
            ) : (
              ""
            )}
            <div>
              <Link href="/contact" legacyBehavior>
                <a className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-50 focus:ring-red-700">
                  Contact Us
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Product;
