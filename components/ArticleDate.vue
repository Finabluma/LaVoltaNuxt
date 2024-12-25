<script setup>
  const props = defineProps({
    update: {
      type: String,
    },
    publishedAt: {
      type: String,
    },
  })
</script>
<template>
  <div class="meta-info">
    <ul>
      <li>
        <span itemprop="author" itemscope itemtype="http://schema.org/Person">
          <span itemprop="name">La Volta</span>
        </span>
      </li>
      <li v-if="update">
        <time :datetime="$dayjs(update).fromNow()" itemprop="dateCreated">
          || Actualizado el {{ $dayjs(update).format('DD MMM YYYY') }}
        </time>
      </li>
      <li v-else>
        <time
          :datetime="$dayjs(publishedAt).fromNow()"
          itemprop="dateCreated pubdate datePublished"
        >
          {{ $dayjs(publishedAt).format('DD MMM YYYY') }}
        </time>
      </li>
    </ul>
  </div>
</template>

<style lang="postcss" scoped>
  .meta-info {
    ul {
      @apply text-xs
      font-sans
      flex
      justify-start;

      li {
        @apply border-b-0 mb-0;

        &:first-child {
          @apply content-after flex items-center
          mr-2;
        }
      }
    }
  }
</style>
