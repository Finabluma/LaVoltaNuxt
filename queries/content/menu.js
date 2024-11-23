const plato = groq`title,tipoplato`
export const menuQuery = groq`{
    "menuDia":*[_type=='menuDiaType'][0]{
        title,
        price,
        menuConditions,
        primeros{
            title,
            "platos":menuPrimeros[]->{${plato}}
        },
        segundos{
            title,
            "platos":menuSegundos[]->{${plato}}
        },
        postres{
            title,
            "platos":menuPostre[]->{${plato}}
        }
    },
    "menuTitlePrice":*[_type=='menuDiaType']{
        title,
        price,
    }
}
`
