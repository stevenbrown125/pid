import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import client from "../../client";
import CTA from "../../components/CTA";
import Layout from "../../components/Layout";
import Seo from "../../components/SEO";
import { allCategoriesQuery } from "../../lib/sanity/allCategoriesQuery";
import { allPostQuery } from "../../lib/sanity/allPostQuery";

export async function getStaticProps() {
  const posts = await client.fetch(allPostQuery);
  const categories = await client.fetch(allCategoriesQuery);
  return {
    props: {
      posts,
      categories,
      appId: process.env.SQ_APP_ID,
      locationId: process.env.SQ_LOCATION_ID,
    },
  };
}

function AnnouncementsPage({ posts, categories }: any) {
  return (
    <Layout>
      <Seo title="All Announcments" />
      <section>
        <div className="grid px-8 pt-8 pb-16 mx-auto lg:grid-cols-6 max-w-7xl lg:order-1">
          <div className="text-base md:col-span-6 mb-6">
            <h2 className="font-semibold leading-6 tracking-wide text-red-600 uppercase">
              All Announcements
            </h2>
            <h3 className="text-3xl font-extrabold leading-8 tracking-tight text-stone-800 sm:text-4xl">
              Announcements
            </h3>
          </div>
          {/* Category Filter */}
          <div className="order-2 col-span-1 py-4">
            <h3 className="text-3xl">Categories</h3>
            <ul className="py-2 text-lg">
              {categories.map((category: any) => (
                <li className="p-2" key={category.slug}>
                  <Link
                    href={`/announcements/${category.slug}`}
                    className="text-red-600 hover:underline"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Content */}
          <div className="order-1 col-span-5 text-slate-900 lg:order-2">
            {posts.map((post: any) => {
              const published = new Date(post.publishedAt).toDateString();
              return (
                <div key={post.title} className="flex flex-col py-2">
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white rounded-lg shadow-lg">
                    <div className="flex-1">
                      <p className="text-xl font-semibold text-neutral-900 lg:text-2xl">
                        {post.title}
                      </p>
                      <p className="text-sm font-base lg:text-md text-neutral-500">
                        Posted on {published} in
                        <Link
                          href={`/announcements/${post.categorySlug}`}
                          className="ml-1 text-red-600 hover:underline"
                        >
                          {post.category}
                        </Link>
                      </p>
                      <div className="mt-3 break-words text-neutral-600 text-md lg:text-lg">
                        <PortableText value={post.body} />
                      </div>
                    </div>
                    <div className="pt-4 text-right">
                      <div className="flex items-center justify-end text-neutral-600">
                        Posted by{" "}
                        <div className="relative w-6 h-6 mx-2 rounded-full">
                          <Image
                            src={post.authorImage}
                            alt={post.author}
                            className="rounded-full"
                            fill
                            sizes="100vw"
                          />
                        </div>
                        {post.author}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <CTA />
    </Layout>
  );
}
export default AnnouncementsPage;
