import groq from 'groq'

export const allCategoriesQuery = groq`
*[_type=="postCategory"]{
    name,
  "slug":slug.current
}`