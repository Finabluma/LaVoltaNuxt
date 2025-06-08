// stores/usePostStore.js
import { computed, ref } from "vue";
import { postsQuery, postBySlugQuery } from "~/queries";

export const usePostStore = defineStore("PostStore", () => {
  const posts = ref([]);
  const post = ref(null);
  const likesByPost = ref({});
  const likedPosts = ref({});

  // ✅ Cargar todos los posts
  const fetchAllPosts = async () => {
    const { data } = await useSanityQuery(postsQuery);
    posts.value = data.value || [];
  };

  // ✅ Cargar un solo post por slug
  const fetchPostBySlug = async (slug) => {
    const { data } = await useSanityQuery(postBySlugQuery, { slug });
    post.value = data.value;

    // Actualizar likes locales
    if (post.value && post.value.id) {
      likesByPost.value[post.value.id] = post.value.likes || 0;
    }
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

  // ✅ Inicializar desde localStorage
  const initLikes = () => {
    if (import.meta.server) return; // Sólo en cliente

    const storedLiked = localStorage.getItem("likedPosts");
    likedPosts.value = storedLiked ? JSON.parse(storedLiked) : {};

    const storedCounts = localStorage.getItem("likesByPost");
    likesByPost.value = storedCounts ? JSON.parse(storedCounts) : {};
  };

  // ✅ Actualizar en Sanity
  const updateLikesInSanity = async (postId, likeChange = 1) => {
    try {
      const res = await $fetch("/api/likes", {
        method: "POST",
        body: { postId, likeChange },
      });
      return res.success === true;
    } catch (err) {
      console.error("Error actualizando likes:", err);
      return false;
    }
  };

  // ✅ Like / Unlike
  const toggleLike = async (postId) => {
    if (!postId) return;

    const hasLiked = likedPosts.value[postId];
    const change = hasLiked ? -1 : 1;

    const success = await updateLikesInSanity(postId, change);
    if (!success) return;

    likedPosts.value[postId] = !hasLiked;
    likesByPost.value[postId] = Math.max(
      0,
      (likesByPost.value[postId] || 0) + change
    );

    localStorage.setItem("likedPosts", JSON.stringify(likedPosts.value));
    localStorage.setItem("likesByPost", JSON.stringify(likesByPost.value));
  };

  const isLiked = (postId) => likedPosts.value[postId] === true;
  const getLikes = (postId) => likesByPost.value[postId] || 0;

  return {
    posts,
    post,
    nextPost,
    previousPost,
    likesByPost,
    likedPosts,
    fetchAllPosts,
    fetchPostBySlug,
    initLikes,
    toggleLike,
    isLiked,
    getLikes,
  };
});
