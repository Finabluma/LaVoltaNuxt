const seoItems = groq`
    metaDescription,
    ogImage,
    metaKeywords
`
export const seoQuery = groq`
    ${seoItems}
`
export const headItems = groq`
    title,
    mainImage
`
export const portadaItems = groq`
  title, 
  cover[]{
    featured,
    article->{
        ${headItems},
        "slug":slug.current,
        subtitle,
        publishedAt,
        "update":_updatedAt,
        categories[]->{
            "id":_id,
            title,
            "slug":slug.current
        }
    }
  }
`
export const contactItems = groq`
    phone,
    street,
    locality,
    postCode,
    mail,
    instagramUrl,
    developer
`
export const optionalsWithText = groq`
    heading,
    tagline,
    excerpt,
    link{
        linkTarget->{title,"slug":slug.current}
    }
`
