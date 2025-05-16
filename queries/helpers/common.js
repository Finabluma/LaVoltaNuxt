const seoItems = groq`
    metaDescription,
    ogImage{
        alt,
        asset->{
            _id,
            url,
            mimeType,
            metadata{
                dimensions{
                    width, 
                    height,
                    aspectRatio
                }
            }
        }
    },
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
export const gallery = groq`
    galleryRef->{
        title,
        description,
        gallery{
            images[]{
                asset,
                alt
            }
        }
    }
`
