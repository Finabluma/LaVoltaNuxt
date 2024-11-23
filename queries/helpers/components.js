import { contactItems, portadaItems } from './common'
import { linkQuery } from '../site/linkQuery'

export const reservasTerms = groq`{
    "reservasIntro": *[_type=='conditionsType'][0]{ title, introTerms },
    "conditions": *[_type=='conditionsType'][0]{ conditions[]->{title, terms}}
}`
export const portadaQuery = groq`{
    "portada":*[_type=='revistaType'][0]{
      "portada":revista->{
            ${portadaItems}
        }
    }
}`
export const siteContact = groq`
    *[_type == "siteContactType"][0]{
        ${contactItems}
    }
`
export const optionalContent = groq`
    optionalContent{
        'gallery':optionalContent[@->._type == 'galleriesType'][0]->{
            title,
            description,
            gallery{
                images[]{
                    asset,
                    alt
                }
            }
        },
        'bannerBody': optionalContent[@->._type == 'bannerBodyType'][0]->{
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
        },
    } 
`
export const phoneContact = groq`*[_type == "siteContactType"][0]{phone}`
export const cartaLink = groq`*[_type == "siteNavType" ][0]{title}`

export const solidariosQuery = groq`
   *[_type == "platoCartaType"][0]{
        tierra{
            platoTierra[]{
            solidario,
            plato->{title,precio}
            }[solidario!=false] 
        },
        mar{
            platoMar[]{
            solidario,
            plato->{title,precio}
            }[solidario!=false] 
        },
    }
`

export const horariosQuery = groq`{
    "horarios":*[_type=='timeTableType'][0]{
        availability[]{
            day,
            "key":_key,
            availableTimes[]{
                "key":_key,
                from,
                to
            }
        }
    }
}`

export const galleriesQuery = groq`{
    "galeria":*[_type=='galleriesType']{
        title,
        gallery{
            images[]{
                alt,
                asset
            }
        }
    }
}`
