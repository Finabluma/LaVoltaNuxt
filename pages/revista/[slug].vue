<script setup>
import { computed } from "vue";

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

const related = computed(() => {
  return post.value.relatedContent;
});

const banner = computed(() => {
  return post.value.optionalContent;
});

const estilos = computed(() => {
  return post.value.optionalContent.length == 1 ? "single" : "compound";
});

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
  <div v-if="post">
    <main>
      <HeroSection>
        <h1 class="title-page">{{ post.title }}</h1>
        <p class="font-coordinates">{{ post.subtitle }}</p>
      </HeroSection>
      <div class="main-content">
        <div class="mb-clus3lev post">
          <ArticleBreadcrumb :post="post">
            <li>
              <ElementsTextLink link-type="internalLinkType" route="revista">Revista</ElementsTextLink>
            </li>
            <li>{{ post.title }}</li>
          </ArticleBreadcrumb>
          <ArticleSummary v-if="post.summary" :summary="post.summary" />
          <div v-if="post.mainImage" class="img">
            <ElementsMediaImageItem :src="post.mainImage.asset._ref" :alt="post.mainImage.alt" height="800"
              sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw" :modifiers="{
                crop: post.mainImage.crop,
                hotspot: post.mainImage.hotspot,
                q: 80,
              }" fit="cover" format="webp" />
          </div>
          <ElementsTextContent :blocks="post?.maincontent" v-if="post?.maincontent" class="mb-clus3lev" />
          <ArticleCategories v-if="post.categories" :tags="post.categories" />
        </div>
        <div class="list-related">
          <ArticleRelated :related="related.articleRelated" v-if="related" />
        </div>
      </div>
    </main>
    <aside v-if="banner !== null" :class="estilos">
      <div class="content_wrapper">
        <div v-for="(item, index) in banner" :key="item._id" :class="index == 0 ? 'first' : 'second'">
          <LazyBannerBottom :optional="item" />
        </div>
      </div>
    </aside>
    <!-- <AppFooter /> -->
  </div>
  <div v-else>Cargando ...</div>
</template>

<style lang="postcss">
.hero .l-center {
  @apply lg:px-[10vw];
}

.post {
  @apply l-center;

  .breadcrumb {
    @apply max-w-4xl mx-auto px-[2vw];
  }

  .img {
    @apply mb-10 max-w-4xl mx-auto;

    img {
      @apply p-1 border;
    }
  }

  .categories {
    @apply md:p-[5vw] max-w-4xl mx-auto;

    .tag {
      @apply text-base items-center;

      svg {
        @apply icon--larger;
      }
    }

    &::before {
      @apply content-[''] w-1/12 h-1 bg-current block mb-clus3lev;
    }
  }
}

.list-related {
  @apply l-center l-box l-box--no-border max-w-4xl lg:px-[10vw];
}
</style>
