<script setup>
import { computed, watch } from "vue";
const props = defineProps({
  error: Object,
});
// get project
const route = useRoute();
const postStore = usePostStore();

// Cargar al montar
await postStore.fetchPostBySlug(route.params.slug);
const post = computed(() => postStore.post);

// meta
usePageHead({
  title: post.title,
  seo: post.seoPage,
});

const banner = computed(() => {
  return post.value.optionalContent;
});

const estilos = computed(() => {
  return post.value.optionalContent.length == 1 ? "single" : "compound";
});
const isLiked = computed(() => postStore.isLiked(post._id))



const handleLike = async (postId) => {
  if (!postStore.isProcessing.value) {
    await postStore.toggleLike(postId);
  }
};

// ✅ Escuchar cambios por navegación interna
watch(
  () => route.params.slug,
  async (newSlug) => {
    if (import.meta.client) {
      postStore.initLikes(); // Solo cliente
    }
    if (newSlug) {
      await postStore.fetchPostBySlug(newSlug);
    }
  }
);
</script>
<template>
  <div v-if="post" id="post">
    <main>
      <HeroSection>
        <h1>{{ post.title }}</h1>
        <p class="lead">{{ post.subtitle }}</p>
      </HeroSection>
      <div class="main-content">
        <div class="max-w-6xl mx-auto px-[4vw] py-5 md:py-10">
          <div class="flex items-center px-1 py-3 mb-2 lg:mb-5">
            <button @click="handleLike(post.id)" :disabled="postStore.isProcessing" :class="[
              postStore.isLiked(post.id) ? 'text-firstlight dark:text-firstdark' : 'text-firstlight dark:text-firstdark'
            ]" class="w-5 h-5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                :fill="postStore.isLiked(post.id) ? 'currentColor' : 'none'" stroke="currentColor" stroke-width="2">
                <path
                  d="M16.696 3C14.652 3 12.887 4.197 12 5.943C11.113 4.197 9.348 3 7.304 3C4.374 3 2 5.457 2 8.481s1.817 5.796 4.165 8.073S12 21 12 21s3.374-2.133 5.835-4.446C20.46 14.088 22 11.514 22 8.481S19.626 3 16.696 3" />
              </svg>

            </button>
            <p class="ml-2">{{ postStore.getLikes(post.id) }}</p>
          </div>
          <ArticleBreadcrumb :post="post">
            <li>
              <ElementsTextLink link-type="internalLinkType" route="revista" title="Revista">Revista</ElementsTextLink>
            </li>
            <li>{{ post.title }}</li>
          </ArticleBreadcrumb>
          <ArticleSummary v-if="post.summary" :summary="post.summary" />
          <ElementsTextContent :blocks="post?.maincontent" v-if="post?.maincontent"
            class="after:block after:w-10 after:h-1 after:bg-current after:mt-8" />
          <ArticleCategories v-if="post.categories" :tags="post.categories" class="pt-7 pb-3 px-[2vw]" />
          <div class="flex items-center py-7 px-[3vw]">
            <button @click="handleLike(post.id)" :disabled="postStore.isProcessing" :class="[
              postStore.isLiked(post.id) ? 'text-firstlight dark:text-firstdark' : 'text-firstlight dark:text-firstdark'
            ]" class="w-5 h-5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                :fill="postStore.isLiked(post.id) ? 'currentColor' : 'none'" stroke="currentColor" stroke-width="2">
                <path
                  d="M16.696 3C14.652 3 12.887 4.197 12 5.943C11.113 4.197 9.348 3 7.304 3C4.374 3 2 5.457 2 8.481s1.817 5.796 4.165 8.073S12 21 12 21s3.374-2.133 5.835-4.446C20.46 14.088 22 11.514 22 8.481S19.626 3 16.696 3" />
              </svg>

            </button>
            <p class="ml-2">{{ postStore.getLikes(post.id) }}</p>
          </div>
          <div v-if="post.mainImage" class=" outline-2 outline-offset-2 my-5 w-10/12 mx-auto lg:w-8/12">
            <ElementsMediaImageItem :src="post.mainImage.asset._ref" :alt="post.mainImage.alt" height="800"
              sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw" :modifiers="{
                crop: post.mainImage.crop,
                hotspot: post.mainImage.hotspot,
                q: 80,
              }" fit="cover" format="webp" />
          </div>
        </div>
        <div class="max-w-4xl mx-auto px-[2vw] mb-10">
          <h2 class="text-fluid-body-lg font-bold mb-4 px-4">Continúa leyendo</h2>
          <ArticleNavigation :previousPost="postStore.previousPost" :nextPost="postStore.nextPost" />
        </div>
      </div>
    </main>
    <aside v-if="banner !== null" :class="estilos">
      <div class="container">
        <div v-for="(item, index) in banner" :key="item._id" :class="index == 0 ? 'first' : 'second'">
          <LazyBannerBottom :optional="item" />
        </div>
      </div>
    </aside>
    <LazyClientOnly>
      <AppFooter />
    </LazyClientOnly>
  </div>
  <div v-else>Cargando ...</div>
</template>
