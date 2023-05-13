import { PortableText } from "@portabletext/react";
import groq from "groq";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import client from "../../client";
import Layout from "../../components/Layout";
import { allPostQuery } from "../../lib/sanity/allPostQuery";
import { allCategoriesQuery } from "../../lib/sanity/allCategoriesQuery";
import Seo from "../../components/SEO";

export async function getStaticProps({ params }: any) {
  const categories = await client.fetch(allCategoriesQuery);
  const posts = await client.fetch(
    groq`*[_type=="post" && category->slug.current==$slug]{
      title,
      "id": _id,
      "slug": slug.current,
      "body":body,
      "author":author->name,
      "authorImage":author->image.asset->url,
      "category":category->name,
      "categorySlug": category->slug.current,
      publishedAt
  }`,
    { slug: params.slug }
  );
  return {
    props: {
      category: params.slug,
      posts: posts,
      categories,
      appId: process.env.SQ_APP_ID,
      locationId: process.env.SQ_LOCATION_ID,
    },
  };
}

export async function getStaticPaths() {
  const posts = await client.fetch(allPostQuery);
  const paths = posts.map((post: any) => {
    const slug = post.categorySlug;
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

const Post: NextPage = ({ category, posts, categories }: any) => {
  return (
    <Layout>
      <Seo title={`${category} Announcements`} />
      <section>
        <div className="grid grid-cols-6 px-8 pt-8 pb-16 mx-auto max-w-7xl">
          {/* Category Filter */}
          <div className="col-span-1 py-4">
            <h3 className="text-3xl">Categories</h3>
            <ul className="py-2 text-lg">
              {categories.map((category: any) => (
                <li className="p-2" key={category.slug}>
                  <Link href={`/announcements/${category.slug}`} legacyBehavior>
                    <a className="text-red-600 hover:underline">
                      {category.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Content */}
          <div className="col-span-5 text-slate-900">
            {posts.map((post: any) => {
              const published = new Date(post.publishedAt).toDateString();
              return (
                <div key={post.title} className="flex flex-col">
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white rounded-lg shadow-lg">
                    <div className="flex-1">
                      <p className="text-xl font-semibold text-gray-900 lg:text-2xl">
                        {post.title}
                      </p>
                      <p className="text-sm font-base lg:text-md text-neutral-500">
                        Posted on {published} in
                        <Link
                          href={`/announcements/${post.categorySlug}`}
                          legacyBehavior
                        >
                          <a className="ml-1 text-red-600 hover:underline">
                            {post.category}
                          </a>
                        </Link>
                      </p>
                      <div className="mt-3 text-gray-500 break-words text-md lg:text-lg">
                        <PortableText value={post.body} />
                      </div>
                    </div>
                    <div className="pt-4 text-right">
                      <div className="flex items-center justify-end">
                        Posted by{" "}
                        <div className="relative w-6 h-6 mx-2 rounded-full">
                          <Image
                            src={post.authorImage}
                            alt={post.author}
                            className="rounded-full"
                            fill
                            sizes="100vw" />
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
    </Layout>
  );
};

export default Post;
