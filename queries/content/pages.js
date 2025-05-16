import {
  seoQuery,
  contactItems,
  portadaItems,
  gallery,
} from '../helpers/common'
import { optional, mensaje } from '../helpers/components'

const cartaMenuItems = groq`
    cartamenu[]{
        _key,
        tagline,
        excerpt,
        heading,
        link{
            title,
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

export const pagesQuery = groq`{
    "home":*[_type == "homeType"][0]{
        title,
        subtitle,
        content,
        ${cartaMenuItems},
        ${gallery},
        ${optional},
        ${mensaje},
        "portada":*[_type=='revistaType'][0]{
            "portada":revista->{
                    ${portadaItems}
            }
        }        
    },
    "revista":*[_type == 'revistaType'][0]{
        title,        
        seo{
            ${seoQuery}
        },
        ${optional},
        ${mensaje},
        "portada":revista->{
            ${portadaItems}
        }
    },
    "menu":*[_type=='menuPageType'][0]{
        title,
        menuConditions,
        price,
        pricehalf,
        priceshare,
        ${gallery},
        ${optional},
        ${mensaje},
        seo{
            ${seoQuery}
        },
        
    },
    "carta":*[_type=='cartaPageType'][0]{
        title,
        warning,
        seo{
            ${seoQuery}
        },
        ${gallery},
        ${optional},
        ${mensaje},
    },
    "reservas":*[_type=='reservasType'][0]{
        title,
        ${mensaje},
        seo{
            ${seoQuery}
        },
        introTerms,
        "reservasIntro": *[_type=='conditionsType'][0]{ title },
        "conditions": *[_type=='conditionsType'][0]{ conditions[]->{title, terms}},
    },
    "terms":*[_type=='termsType'][0]{
        title,
        richtext,
        seo{
            ${seoQuery}
        },
    },
    "contacta":*[_type=='contactaType'][0]{
        title,
        seo{
            ${seoQuery}
        },
        "datos":siteContact->{${contactItems}}
    }
}`
