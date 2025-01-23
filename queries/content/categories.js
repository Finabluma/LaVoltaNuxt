export const categoryQuery = groq`*[_type == 'categoryType' && slug.current == $slug][0]{
  title,
  "slug":slug.current
}`
