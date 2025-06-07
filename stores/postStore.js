// stores/usePostStore.js
import { computed, ref } from "vue";
import { postsQuery, postBySlugQuery } from "~/queries";

export const usePostStore = defineStore("PostStore", () => {
  const posts = ref([]);
  const post = ref(null);
  const likesByPost = ref({});
  const likedPosts = ref({});
  const sanity = useSanity();

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

  async function initLikes() {
    if (typeof window === "undefined") return;
    const storedLikes = localStorage.getItem("likesByPost");
    const storedLiked = localStorage.getItem("likedPosts");

    likedPosts.value = storedLiked ? JSON.parse(storedLiked) : {};

    if (storedLikes) {
      likesByPost.value = JSON.parse(storedLikes);
    } else {
      await fetchLikesFromSanity();
    }
  }

  async function updateLikesInSanity(postId, likeChange = 1) {
    try {
      await sanity.client
        .patch(postId)
        .setIfMissing({ likes: 0 })
        .inc({ likes: likeChange })
        .commit();
      return true;
    } catch (err) {
      console.error("Error actualizando likes en Sanity:", err);
      return false;
    }
  }

  async function toggleLike(postId) {
    if (!postId) return;

    const hasLiked = likedPosts.value[postId];
    const change = hasLiked ? -1 : 1;

    // Actualiza estado local primero (optimista)
    likedPosts.value[postId] = !hasLiked;
    if (!likesByPost.value[postId]) likesByPost.value[postId] = 0;
    likesByPost.value[postId] = Math.max(0, likesByPost.value[postId] + change);

    // Guarda en localStorage
    localStorage.setItem("likesByPost", JSON.stringify(likesByPost.value));
    localStorage.setItem("likedPosts", JSON.stringify(likedPosts.value));

    // Intenta actualizar en Sanity
    const success = await updateLikesInSanity(postId, change);

    if (!success) {
      // Rollback si falla actualización en Sanity
      likedPosts.value[postId] = hasLiked;
      likesByPost.value[postId] = Math.max(
        0,
        likesByPost.value[postId] - change
      );

      localStorage.setItem("likesByPost", JSON.stringify(likesByPost.value));
      localStorage.setItem("likedPosts", JSON.stringify(likedPosts.value));
    }
  }

  function isLiked(postId) {
    return likedPosts.value[postId] === true;
  }

  function getLikes(postId) {
    return likesByPost.value[postId] || 0;
  }

  async function fetchLikesFromSanity() {
    try {
      const { data } = await useSanityQuery(postsQuery);
      if (data.value) {
        likesByPost.value = {};
        data.value.forEach((post) => {
          likesByPost.value[post._id] = post.likes || 0;
        });
        localStorage.setItem("likesByPost", JSON.stringify(likesByPost.value));
      }
    } catch (error) {
      console.error("Error fetching likes from Sanity:", error);
    }
  }

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
    fetchLikesFromSanity,
  };
});
