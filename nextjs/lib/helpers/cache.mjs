import sanityClient from '@sanity/client'
import groq from 'groq'

export const allProductQuery = groq`
*[_type=="product"]{
    title,
    description,
    "id": _id,
    "slug": slug.current,
  }
`

export const getPosts = async () => {
  const client = sanityClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_ID,
    token: process.env.SANITY_API_KEY,
    dataset: 'production',
    useCdn: true
  })

  const data = await client.fetch(allProductQuery)
  console.log(data)
}

getPosts()
