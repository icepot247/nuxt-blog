<template>
  <div>
    <div class="article-head w-full h-auto bg-indigo-200 mb-8">
      <div class="flex flex-col">
        <div class="container mx-auto flex items-center justify-center h-auto">
          <h1 class="text-4xl text-black font-semibold py-10 px-5 text-center" v-if="error.statusCode === 404">Page not found</h1>
          <h1 v-else class="text-4xl text-black font-semibold py-10 px-5 text-center" v-if="error.statusCode === 404">An error occurred</h1>
        </div>
        <div class="flex flex-row items-center justify-center pb-10">
          <nuxt-link to="/">Click to visit Home page</nuxt-link>
          <br>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      error: {
        type: [Object, Error],
        default: () => {},
      },
    },
  }
</script>
