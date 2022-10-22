import groq from 'groq';

export const allPapersQuery = groq`
*[_type=="techPaper"]{

    "id": _id,
  title,
  author,
  "pdf": pdf.asset->url,
  year,
  "type": type->name
  
  }`;
