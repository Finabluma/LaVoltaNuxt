<script setup>
defineProps({
    previousPost: Object,
    nextPost: Object,
})
</script>

<template>
    <div class="px-2 flex flex-col md:flex-row md:space-x-4 space-y-5 md:space-y-0">
        <!-- Artículo anterior -->
        <article v-if="previousPost" class="teaser">
            <ElementsTextLink link-type="internalLinkType" route="revista-slug" :slug="previousPost.slug"
                :title="previousPost.subtitle" :aria-label="`Artículo anterior - ${previousPost.title}`">
                <div v-if="previousPost.mainImage">
                    <ElementsMediaImageItem :src="previousPost.mainImage.asset._ref" :alt="previousPost.mainImage.alt"
                        :modifiers="{
                            crop: previousPost.mainImage.crop,
                            hotspot: previousPost.mainImage.hotspot,
                            q: 80,
                        }" sizes="xs:120px" height="120px" fit="cover" format="webp" />
                </div>
                <div>
                    <h3>
                        {{ previousPost.title }}
                    </h3>
                    <ArticleCategories :tags="previousPost.categories" v-if="previousPost.categories" />
                </div>
            </ElementsTextLink>
        </article>
        <!-- Artículo siguiente -->
        <article v-if="nextPost" class="teaser">
            <ElementsTextLink link-type="internalLinkType" route="revista-slug" :slug="nextPost.slug"
                :title="nextPost.subtitle" :aria-label="`Artículo siguiente - ${nextPost.title}`">
                <div v-if="nextPost.mainImage">
                    <ElementsMediaImageItem :src="nextPost.mainImage.asset._ref" :alt="nextPost.mainImage.alt"
                        :modifiers="{
                            crop: nextPost.mainImage.crop,
                            hotspot: nextPost.mainImage.hotspot,
                            q: 80,
                        }" sizes="xs:120px" height="120px" fit="cover" format="webp" />
                </div>
                <div>
                    <h3>
                        {{ nextPost.title }}
                    </h3>
                    <ArticleCategories :tags="nextPost.categories" v-if="nextPost.categories" />
                </div>
            </ElementsTextLink>
        </article>
    </div>
</template>
