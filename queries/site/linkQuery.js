const linkTarget = groq`
    linkTarget->{
        title, 
        "id":_id,
        ...(parent->{
                "parentTitle":title,
                "parentId":id
            })
        }
`
const extLink = groq`
        "linkType": "extLinkType",
		"title": coalesce(title),
        href,
        blank
`
export const linkQuery = groq`
    _type == "internalLinkType" =>{
        "linkType": "internalLinkType",
        "title": coalesce( title,			
            linkTarget->title
		),
        "route":select(
            linkTarget->_type == "homeType" => "index",
            linkTarget->_type == "cartaPageType" => "la-carta",
            linkTarget->_type == "menuPageType" => "el-menu",
            linkTarget->_type == "revistaType" => "revista",
            linkTarget->_type == "reservasType" => "reservas",
            linkTarget->_type == "articleType" => "revista-slug",
            linkTarget->_type == "contactaType" => "contacta",
            linkTarget->_type == "termsType" => "aviso-legal",
            "categoryType" => "categoria-slug",
        ),
        "slug":linkTarget->slug.current,
    },
    _type == "extLinkType" => {
		${extLink}
	}
`
