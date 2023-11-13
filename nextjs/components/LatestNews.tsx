import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import FacebookFeed from "./FacebookFeed";
import { FaFacebook } from "react-icons/fa6";

export default function LastestNews({ posts }: any) {
  const firstTwoPosts = posts.slice(0, 2);
  return (
    <section className="relative px-4 pt-8 bg-cover border-b border-red-200 m:px-6 lg:px-8 bg-stripes">
      <div className="relative mx-auto max-w-7xl">
        <div className="grid max-w-lg gap-5 mx-auto sm:max-w-5xl lg:grid-cols-11 lg:max-w-none xl:grid-cols-12">
          <div className="flex flex-col flex-shrink-0 col-span-5 bg-transparent xl:col-span-4">
            <p className="flex items-center gap-1 pb-2 font-medium text-center text-gray-900 text-md lg:text-lg lg:text-left">
              <FaFacebook className="text-[#5c74a8]" />
              Facebook Feed
            </p>
            <FacebookFeed />
          </div>
          {firstTwoPosts.map((post: any) => (
            <div
              key={post.title}
              className="flex flex-col col-span-3 xl:col-span-4"
            >
              <p className="pb-2 font-medium text-red-600 text-md lg:text-lg">
                <Link
                  href={`/announcements/${post.categorySlug}`}
                  className="hover:underline"
                >
                  {post.category}
                </Link>
              </p>
              <div className="flex flex-col justify-between flex-1 p-6 bg-white rounded-lg shadow-lg">
                <div className="flex-1">
                  <p className="text-xl font-semibold text-gray-900 lg:text-2xl">
                    {post.title}
                  </p>
                  <p className="text-sm italic font-medium lg:text-md text-neutral-500">
                    {post.publishedAt}
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
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="rounded-full"
                      />
                    </div>
                    {post.author}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-6 text-2xl font-semibold text-center text-red-600 md:py-10 hover:text-neutral-800">
        <Link href="/announcements">See more annoucements</Link>
      </div>
    </section>
  );
}
