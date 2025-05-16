export default function ({ title, seo, mainImage }) {
  const titleString = unref(title)
  if (!titleString) {
    return
  }
  const { siteOptions } = useMainStore()

  // create long title
  const longTitleString = `${titleString} | ${siteOptions?.name}`

  useHead({
    title: titleString,
    meta: [
      {
        property: 'og:title',
        content: longTitleString,
      },
      seo?.metaDescription
        ? {
            name: 'description',
            content: seo?.metaDescription,
          }
        : {},
      seo?.metaDescription
        ? {
            property: 'og:description',
            content: seo.metaDescription,
          }
        : {},
      seo?.metaKeywords
        ? {
            name: 'keywords',
            content: seo?.metaKeywords.join(','),
          }
        : {},
    ],
  })
}
