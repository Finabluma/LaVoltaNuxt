import { headItems } from '../helpers/common'
import { linkQuery } from '../site/linkQuery'
export const articleQuery = groq`*[_type == 'articleType' && slug.current == $slug][0]{
        ${headItems},
        "slug":slug.current,
        seoPage,
        publishedAt,
        "update":_updatedAt,
        mainImage,
        "id":_id,
        subtitle,
        summary,
        maincontent,
        categories[]->{
                "id":_id,
                title,
                "slug":slug.current
        },
        relatedContent{
                articleRelated[]->{
                        mainImage,
                        title,
                        "slug":slug.current,
                        categories[]->{
                                "id":_id,
                                title,
                                "slug":slug.current
                        },
                },
        },
        optionalContent[]->{
                "id":_id,
                title,
                image,
                banner,
                enlace{
                title,
                ${linkQuery},
                linkTarget->{
                        title,
                        "slug":slug.current
                }
            }
        }
             
    }
`

export const articleCategory = groq`*[_type == 'articleType']{
        ${headItems},
        "slug":slug.current,
        mainImage,
        "id":_id,
        subtitle,
        categories[]->{
                "id":_id,
                title,
                "slug":slug.current
        },      
    }
`
