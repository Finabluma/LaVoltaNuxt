import { headItems } from '../helpers/common'
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
        optionalContent[]-> {
                image{
                        asset
                },
                banner,
                title,
                enlace{
                        title,
                        linkTarget->{
                                _type,
                                title
                        }
                }
        }      
    }
`
