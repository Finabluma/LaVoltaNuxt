// stores/usePostStore.js
import { postsQuery, postBySlugQuery } from '~/queries'

export const usePostStore = defineStore('PostStore', () => {
  const posts = ref([])
  const post = ref(null)

  const fetchAllPosts = async () => {
    const { data } = await useSanityQuery(postsQuery)
    posts.value = data.value
  }

  const fetchPostBySlug = async (slug) => {
    const { data } = await useSanityQuery(postBySlugQuery, { slug })
    post.value = data.value
  }

  return {
    posts,
    post,
    fetchAllPosts,
    fetchPostBySlug,
  }
})
