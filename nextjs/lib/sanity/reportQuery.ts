
import groq from "groq";

export const reportQuery = groq`
*[_type=="product"]{
  title,
  "slug": slug.current,
  "industry": industries[]->name,
  multigas,
  price,
  "gasesMeasured": gasesMeasured[]->name,
  "image": image.secure_url,
  "pdf": pdf.asset->url,
}
  `;
