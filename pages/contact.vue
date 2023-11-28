<template>
  <div>
    <div class="article-head w-full h-auto bg-indigo-200 mb-8">
      <div class="flex flex-col">
        <div class="container mx-auto flex items-center justify-center h-auto">
          <h1 class="text-4xl text-black font-semibold py-10 px-5 text-center">Get In Touch</h1>
        </div>
      </div>
    </div>

    <article class="article mx-auto tracking-wide leading-loose text-xl px-5 md:px-0 mb-10">

      <div class="max-w-screen-md mx-auto p-5">
        <form class="w-full">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                First Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name" type="text" placeholder="Jane">
              <p class="text-red-500 text-xs italic">Please fill out this field.</p>

            </div>
            <div class="w-full md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Last Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name" type="text" placeholder="Doe">
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                Email Address
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-email" type="email" placeholder="********@*****.**">
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                Your Message
              </label>
              <textarea rows="10"
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
      </textarea>
            </div>
            <div class="flex justify-between w-full px-3">
              <div class="md:flex md:items-center">
                <label class="block text-gray-500 font-bold">
                  <input class="mr-2 leading-tight" type="checkbox">
                  <span class="text-sm">
            Send me your newsletter!
          </span>
                </label>
              </div>
              <button
                class="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                type="button" @click="submit">
                Send Message
              </button>
            </div>

          </div>

        </form>
      </div>

    </article>

  </div>
</template>
<script>
  export default {

    data() {
      return {
        scrollPosition: null,
        social: false
      }
    },

    mounted() {
      window.addEventListener('scroll', this.updateScroll);
    },

    async asyncData({$axios}) {
      const ip = await $axios.$get('http://icanhazip.com')
      console.log('ip', ip)
      return {ip}
    },

    methods: {
      submit() {
        this.$axios.$get('http://icanhazip.com').then((response)=>{

        })
      }
    },
  }

</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300,400;500,600;700&display=swap");

  body {
    font-family: "Poppins", sans-serif !important;
  }

</style>
