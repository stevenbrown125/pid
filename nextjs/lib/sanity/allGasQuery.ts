import groq from 'groq'

export const allGasQuery = groq`
    *[_type=="gas"]{
    name,
    "id":_id,
    "symbol" : symbol,
    description,
    "slug": slug.current
}`