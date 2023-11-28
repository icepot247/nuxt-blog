<template>
  <div >
    <div class="article-head w-full h-auto bg-indigo-200 mb-8">
      <div class="flex flex-col">
        <div class="container mx-auto flex items-center justify-center h-auto">
          <h1 class="text-4xl text-black font-semibold py-10 px-5 text-center">Test Page</h1>
        </div>
      </div>
    </div>

    <article class="article mx-auto tracking-wide leading-loose text-xl px-5 md:px-0 mb-10">
      <p>Description</p>
    </article>

  </div>
</template>
<script>
  export default {

    data(){
      return{
        scrollPosition: null,
        social: false
      }
    },
    beforeMount() {

    },
    mounted() {
      window.addEventListener('scroll', this.updateScroll);


      // console.log('method', this.apiCall())

    },
    async asyncData({ $axios }) {
      const ip = await $axios.$get('http://icanhazip.com')
      console.log('ip', ip)
      return { ip }
    },

    methods: {
      async apiCall({ $axios }) {
        const ip = await $axios.$get('http://icanhazip.com')
        return { ip }
      }
    },
  }

</script>
<style lang="css">


</style>
