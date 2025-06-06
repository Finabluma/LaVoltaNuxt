// stores/usePostStore.js
import { computed } from "vue";
import { postsQuery, postBySlugQuery } from "~/queries";

export const usePostStore = defineStore("PostStore", () => {
  const posts = ref([]);
  const post = ref(null);

  const fetchAllPosts = async () => {
    const { data } = await useSanityQuery(postsQuery);
    posts.value = data.value;
  };

  const fetchPostBySlug = async (slug) => {
    const { data } = await useSanityQuery(postBySlugQuery, { slug });
    post.value = data.value;
  };

  // Computed: ordenar por ID (alfabéticamente)
  const sortedPosts = computed(() =>
    [...posts.value].sort((a, b) => a.id.localeCompare(b.id))
  );

  // Computed: encontrar índice del post actual
  const currentIndex = computed(() =>
    sortedPosts.value.findIndex((p) => p.id === post.value?.id)
  );

  // Computed: post siguiente
  const nextPost = computed(() => {
    if (currentIndex.value === -1) return null;
    return sortedPosts.value[currentIndex.value + 1] || null;
  });

  // Computed: post anterior
  const previousPost = computed(() => {
    if (currentIndex.value === -1) return null;
    return sortedPosts.value[currentIndex.value - 1] || null;
  });

  return {
    posts,
    post,
    nextPost,
    previousPost,
    fetchAllPosts,
    fetchPostBySlug,
  };
});
