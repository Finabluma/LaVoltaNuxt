<script setup>
  const { terms } = usePagesStore()

  // meta
  usePageHead({
    title: terms.title,
    seo: terms.seo,
  })
</script>
<template>
  <div class="pageTerms">
    <main>
      <div class="main_content">
        <section>
          <h1>{{ terms.title }}</h1>
          <div v-if="terms.richtext" class="sm:px-10">
            <ElementsTextContent :blocks="terms.richtext" />
          </div>
        </section>
      </div>
    </main>
    <AppFooter />
  </div>
</template>
<!-- <style lang="postcss">
  .pageTerms {
    @apply w-screen
    min-h-dvh
    flex
    flex-col
    bg-white
    dark:bg-[#4A647D];

    .main_content {
      section {
        @apply mx-auto
        max-w-prose
        pt-[40%]
        pb-10
        px-3
        sm:pt-[20%]
        lg:pt-[15%]
        lg:pb-[10%];

        h1 {
          @apply text-5xl/none
          font-coordinates
          font-bold
          px-2
          mb-5
          content-after
          md:mb-10
          lg:mb-14;

          &:after {
            @apply block
            w-5
            h-1
            mt-5;
          }
        }

        .blockContent {
          @apply text-balance;
          h2,
          h3 {
            @apply font-coordinates
            font-semibold
            text-lg
            mb-2;
          }
          p {
            @apply mb-6;
          }

          ul {
            li {
              @apply not-italic
              font-bold;
            }
          }
        }
      }
    }

    #footer {
      @apply mt-auto;
    }
  }
</style> -->
