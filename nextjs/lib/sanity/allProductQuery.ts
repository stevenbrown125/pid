import groq from "groq";

export const allProductQuery = groq`

*[_type=="product"]{
    title,
    description,
    "id": _id,
    "image": image.secure_url,
    "slug": slug.current,
    "industries": industries[]->name
  }
  `;
