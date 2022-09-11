import groq from 'groq'

export const allPostQuery = groq`
*[_type=="post"]{
  title,
  "id": _id,
  "slug": slug.current,
  "body":body,
  "author":author->name,
  "authorImage":author->image.asset->url,
  "category":category->name,
  "categorySlug": category->slug.current,
  publishedAt
}`