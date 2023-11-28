<template>
  <div >
    <div class="article-head w-full h-auto bg-indigo-200 mb-8">
      <div class="flex flex-col">
        <div class="container mx-auto flex items-center justify-center h-auto">
          <h1 class="text-4xl text-black font-semibold py-10 px-5 text-center">Page</h1>
        </div>
      </div>
    </div>

    <article class="article mx-auto tracking-wide leading-loose text-xl px-5 md:px-0 mb-10">
     details
    </article>

  </div>
</template>

<style lang="css">
  html {
    scroll-behavior: smooth;
  }
  .article{
    /*max-width: 768px!important;*/
    max-width: 85%!important;
    position: relative;
  }
  .share{
    position: fixed;
    top: 10rem;
    right: 0;
  }
  .table-of-content{
    position: fixed;
    top: 0;
    right: -10%;
    background-color: black;
    color: #fff;
    z-index: 2;
    padding: 10px 20px;
    width: 300px;
  }
  pre{
    border-radius: 8px;
  }
  /* Table */
  table {
    width: 100%!important;
    max-width: 100%;
    margin-bottom: 1rem;
    background-color: transparent;
  }
  thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
  }
  tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
  }
  tbody tr:nth-of-type(odd) {
    background-color: rgba(0,0,0,.05);
  }
  .nuxt-content h2 {
    font-weight: bold;
    font-size: 28px;
  }
  .nuxt-content h3 {
    font-weight: bold;
    font-size: 22px;
  }
  .nuxt-content p {
    margin-bottom: 20px;
  }
  .nuxt-content h1 {
    font-size: 2.25rem;
    font-weight: 600;
  }

</style>
