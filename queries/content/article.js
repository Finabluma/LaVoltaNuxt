import { headItems } from "../helpers/common";
import { linkQuery } from "../site/linkQuery";
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
`;

export const postBySlugQuery = groq`*[_type == 'articleType' && slug.current == $slug][0]{
        ${headItems},
        "slug":slug.current,
        seoPage,
        publishedAt,
        mainImage,
        "id":_id,
        subtitle,
        summary,
        maincontent,
        likes,
        categories[]->{
                "id":_id,
                title,
                "slug":slug.current
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
`;

export const postsQuery = groq`*[_type == 'articleType']{
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
             
    }
`;
