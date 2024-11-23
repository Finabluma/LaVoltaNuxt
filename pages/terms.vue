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
<style lang="postcss">
  .pageTerms {
    @apply w-screen
    min-h-dvh
    flex
    flex-col
    bg-slate-200
    dark:bg-slate-600;

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
          font-mono
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
          h2 {
            @apply text-xl
            font-mono
            mb-1;
          }
          p {
            @apply mb-3;
          }

          ul {
            li {
              @apply not-italic
              font-sans;
            }
          }
        }
      }
    }

    #footer {
      @apply mt-auto;
    }
  }
</style>
