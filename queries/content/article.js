import { headItems } from '../helpers/common'
import { optional } from '../helpers/components'
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
        ${optional}      
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
