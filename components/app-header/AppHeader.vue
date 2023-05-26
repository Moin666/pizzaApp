<template>
  <nav>
    <ul class="header">
      <li class="w-75">
        <ul class="d-flex ">
          <li > <nuxt-link to="/"  class="text-white"><AppLogo/></nuxt-link> </li>
           <li class="ml-5" > <nuxt-link to="/restaurent" class="text-white">Restaurent</nuxt-link> </li>
        </ul>
      </li>
      <li class="w-25 text-right" > <nuxt-link to="/cart" class="text-white mr-4">Cart</nuxt-link> </li>
    </ul>
   
  </nav>
</template>

<script>

import AppLogo from '@/components/app-logo/AppLogo.vue'

export default {
  components: {
    AppLogo,
  },

}
</script>

<style  scoped >
  .header{
    display: flex;
    background-color: black;
    padding: 10px;
  }
  li  {
    list-style-type: none;
  }

</style>