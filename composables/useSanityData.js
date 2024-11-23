export default async function ({ query, params }) {
  // get data
  const { data, refresh } = await useLazySanityQuery(query, params)

  return data
}
