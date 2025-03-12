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
                "id":plato->_id,
                "title":plato->title,
                "precio":plato->precio,
                "slug":plato->slug.current,
                "solidario":solidario,
            }| order(precio asc)
        },
    },
    "tierra":*[_type == "platoCartaType"][0]{
        "tipo":tierra{
            title,
            "producto":platoTierra[]{
                "id":plato->_id,
                "title":plato->title,
                "precio":plato->precio,
                "slug":plato->slug.current,
                "solidario":solidario,
            }| order(precio asc)
        },
    },
    "carpaccio":*[_type == "platoCartaType"][0]{
        "tipo":carpaccios{
            title,
            "producto":platoCarpaccio[]->{
                "id":_id,
                title,
                "slug":slug.current,
                precio
            }| order(precio asc)
            
        },
    },
    "postre":*[_type == "platoCartaType"][0]{
        "tipo":postre{
            title,
            "producto":platoPostre[]->{
                "id":_id,
                title,
                "slug":slug.current,
                precio
            }| order(precio asc)
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

// *[_type == "platoCartaType"][0]{
//   tierra{
//     _type,
//     platoTierra[]{
//       "solidario":solidario,
//       "id":plato->_id,
//       "slug":plato->slug.current,
//       "precio":plato->precio,
//       "plato":plato->title,
//     }| order(precio asc)
//   }
// }
