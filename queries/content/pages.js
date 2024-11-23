import {
  seoQuery,
  headItems,
  contactItems,
  portadaItems,
} from '../helpers/common'
import { optionalContent } from '../helpers/components'

const cartaMenuItems = groq`
    cartamenu[]{
        _key,
        tagline,
        excerpt,
        heading,
        link{
            linkTarget->{
                title,
                mainImage{
                    asset,
                    alt
                },
                _type
            }
        }
    }
`

const galleryItems = groq`
    gallery->{
        title,
        description,
        gallery{images[]}
    }
`

export const pagesQuery = groq`{
    "home":*[_type == "homeType"][0]{
        ${headItems},
        subtitle,
        content,
        ${cartaMenuItems},
        ${optionalContent},
        "portada":*[_type=='revistaType'][0]{
            "portada":revista->{
                    ${portadaItems}
            }
        }        
    },
    "revista":*[_type == 'revistaType'][0]{
        ${headItems},
        seo{
            ${seoQuery}
        },
        ${optionalContent},
        "portada":revista->{
            ${portadaItems}
        }
    },
    "menu":*[_type=='menuPageType'][0]{
        ${headItems},
        ${optionalContent},
        seo{
            ${seoQuery}
        },
        
    },
    "carta":*[_type=='cartaPageType'][0]{
        ${headItems},
        seo{
            ${seoQuery}
        },
        ${optionalContent}
    },
    "reservas":*[_type=='reservasType'][0]{
        ${headItems},
        seo{
            ${seoQuery}
        },
        "reservasIntro": *[_type=='conditionsType'][0]{ title, introTerms },
        "conditions": *[_type=='conditionsType'][0]{ conditions[]->{title, terms}},
        ${optionalContent}
    },
    "terms":*[_type=='termsType'][0]{
        title,
        richtext,
        seo{
            ${seoQuery}
        },
    },
    "contacta":*[_type=='contactaType'][0]{
        ${headItems},
        seo{
            ${seoQuery}
        },
        "datos":siteContact->{${contactItems}}
    }
}`
