import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_ID,
  token: process.env.SANITY_API_KEY,
  dataset: 'production',
  useCdn: true
})
