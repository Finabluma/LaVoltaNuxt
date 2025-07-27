const bebidaItem = groq`
    _type == 'reference' => @->{
        "title":bebida,
        "slug": slug.current,
        "id":_id,
        precio,
        "do":do->{do},
        "variedad":variedades[]->{variedad},
        ...(parent-> {
            "parentBebida": bebida,
            "parentSlug": slug.current,
            "parentPrecio":precio,
            "parentDo":do,
            "parentVariedad":variedad
        })
    }
`;
export const bebidasQuery = groq`{
    "title":*[_type == "bebidasType"][0]{title},
    "cavas":*[_type == "bebidasType"][0]{
        "tipo":cavas{
            title,
            "producto":vinoCava[]{
                ${bebidaItem}
            }| order(precio asc)
        },
    },
    "tintos":*[_type == "bebidasType"][0]{
        "tipo":tintos{
            title,
            "producto":vinoTinto[]{
                ${bebidaItem}
            }| order(precio asc)
        }
    },
    "rosados":*[_type == "bebidasType"][0]{
        "tipo":rosados{
            title,
            "producto":vinoRosado[]{
                ${bebidaItem}
            }| order(precio asc)
        }
    },
    "blancos":*[_type == "bebidasType"][0]{
        "tipo":blancos{
            title,
            "producto":vinoBlanco[]{
                ${bebidaItem}
            }| order(precio asc)
        }
    }
}
`;
