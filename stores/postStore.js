// stores/usePostStore.js
import { computed, ref } from "vue";
import { postsQuery, postBySlugQuery } from "~/queries";

export const usePostStore = defineStore("PostStore", () => {
  const posts = ref([]);
  const post = ref(null);
  const likesByPost = ref({});
  const likedPosts = ref({});
  const isProcessing = ref(false);

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
    if (typeof window === "undefined") return; // Solo cliente

    const storedLiked = localStorage.getItem("likedPosts");
    likedPosts.value = storedLiked ? JSON.parse(storedLiked) : {};

    const storedCounts = localStorage.getItem("likesByPost");
    likesByPost.value = storedCounts ? JSON.parse(storedCounts) : {};
  };

  // Actualiza likes en Sanity (llamada API)
  const updateLikesInSanity = async (postId, likeChange) => {
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

  // ✅ Toggle like: solo permite dar like si no ha dado antes, y quitar si ya dio
  const toggleLike = async (postId) => {
    if (!postId || isProcessing.value) return;

    isProcessing.value = true;

    const hasLiked = likedPosts.value[postId];

    const change = hasLiked ? -1 : 1;
    const success = await updateLikesInSanity(postId, change);

    if (success) {
      likedPosts.value[postId] = !hasLiked;
      likesByPost.value[postId] = (likesByPost.value[postId] || 0) + change;

      localStorage.setItem("likedPosts", JSON.stringify(likedPosts.value));
      localStorage.setItem("likesByPost", JSON.stringify(likesByPost.value));
    }

    isProcessing.value = false; // <--- IMPORTANTE: siempre volver a false
  };

  const isLiked = (postId) => likedPosts.value[postId] === true;
  const getLikes = (postId) => likesByPost.value[postId] || 0;

  return {
    posts,
    post,
    nextPost,
    previousPost,
    fetchAllPosts,
    fetchPostBySlug,
    likesByPost,
    likedPosts,
    isProcessing, // <-- ¡IMPORTANTE!
    initLikes,
    toggleLike,
    isLiked,
    getLikes,
  };
});
