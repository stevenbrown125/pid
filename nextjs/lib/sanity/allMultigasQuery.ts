

import groq from "groq";

export const allMultigasQuery = groq`
*[_type=="product"&&multigas==true]{
    title,
    description,
    "id": _id,
    "image": image.secure_url,
    "slug": slug.current,
  }
  `;
