<script setup>
import { computed, onMounted } from "vue";


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

// onMounted(() => {
//   initPostAndLikes();
// });

// async function initPostAndLikes() {
//   const slug = route.params.slug;
//   if (slug) {
//     await postStore.fetchPostBySlug(slug);
//   }
//   await postStore.initLikes();
// }

function handleLike() {
  if (postStore.post?.id) {
    postStore.toggleLike(postStore.post.id)
  }
}

// Reaccionar si cambia el slug (por ejemplo, navegación interna)
watch(
  () => route.params.slug,
  async (newSlug) => {
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
          <ArticleBreadcrumb :post="post">
            <li>
              <ElementsTextLink link-type="internalLinkType" route="revista" title="Revista">Revista</ElementsTextLink>
            </li>
            <li>{{ post.title }}</li>
          </ArticleBreadcrumb>
          <!-- Botón Like -->
          <!-- <button @click="handleLike" :aria-pressed="postStore.isLiked(postStore.post?.id)">
            <span v-if="postStore.isLiked(postStore.post?.id)">❤️</span>
            <span v-else>🤍</span>
            {{ postStore.getLikes(postStore.post?.id) }}
          </button> -->
          <ArticleSummary v-if="post.summary" :summary="post.summary" />
          <ElementsTextContent :blocks="post?.maincontent" v-if="post?.maincontent"
            class="after:block after:w-10 after:h-1 after:bg-current after:mt-8" />
          <ArticleCategories v-if="post.categories" :tags="post.categories" class="py-7 px-[2vw]" />
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
