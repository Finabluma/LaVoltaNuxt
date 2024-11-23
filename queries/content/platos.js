const platoItem = groq`
    title,
    "slug": slug.current,
    precio,
    ...(parent-> {
        "parentPlato": title,
        "parentSlug": slug.current,
        "parentPrecio":precio,
    }
  )
`
const plato = groq`
    "item":plato->{${platoItem}}`
export const platosQuery = groq`{
    "mar":*[_type == "platoCartaType"][0]{
        "tipo":mar{
            title,
            "producto":platoMar[]{
                solidario,
                ${plato}
            }
        },
    },
    "tierra":*[_type == "platoCartaType"][0]{
        "tipo":tierra{
            title,
            "producto":platoTierra[]{
                solidario,
                ${plato}
            }
        },
    },
    "carpaccio":*[_type == "platoCartaType"][0]{
        "tipo":carpaccios{
            title,
            "producto":platoCarpaccio[]->{${platoItem}}
            
        },
    },
    "postre":*[_type == "platoCartaType"][0]{
        "tipo":postre{
            title,
            "producto":platoPostre[]->{${platoItem}}
        },
    },
    "obs":*[_type == "platoCartaType"][0]{
        warning
    },
    "solidario":*[_type == "platoCartaType"][0]{
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
    
}`
