

import groq from "groq";

export const allIndustryQuery = groq`
*[_type=="industry"]{
    name,
    "id": _id,
    "image": image.secure_url,
    "slug": slug.current,
  }
  `;
