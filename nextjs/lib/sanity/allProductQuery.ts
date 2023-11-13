import groq from "groq";

export const allProductQuery = groq`

*[_type=="product"]{

    title,

    description,

    "id": _id,

    "image": image.asset->url,

    "slug": slug.current,
    "type": type->name
  }
  `;
