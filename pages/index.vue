<template>
  <main>
    <AppHero/>
    <AppRestaurent :dataSource="foodData"/>
  </main>
</template>

<script>

import AppHero from '~/components/app-hero/AppHero.vue'
import AppRestaurent from '~/components/app-restaurent/AppRestaurent.vue'

import { mapState } from 'vuex';


export default {
  name: 'IndexPage',
  components: {
    AppHero,
  },
  computed: {
    ...mapState([
      'foodData',
    ])
  },

  created () {
    if(process.sever){
      localStorage.setItem('test', 1);
    }
  },

}
</script>
