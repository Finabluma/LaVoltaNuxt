import { linkQuery } from './linkQuery'
import { seoQuery } from '../helpers/common'
import { phoneContact, cartaLink, siteContact } from '../helpers/components'

export const siteQuery = groq`{
    "siteNav": *[_id == "siteNavType"][0]{
        navMain[]{
			${linkQuery}
		},
		navFooter[]{
			${linkQuery}
		},
        navCredits[]{
			${linkQuery}
		},
    },
    "siteOptions": *[_id == "seoType"][0]{
        name,
        hrefLang,
        seo{
            ${seoQuery}
        }
    },
    "siteFavicon":*[_id == "faviconType"][0]{
        appleTouchIcon,
        favicon
    },
    "phone":${phoneContact},
    "linkCarta":${cartaLink},
    "datos":${siteContact}
}`
