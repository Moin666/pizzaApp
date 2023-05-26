<template>
    <div class="container border"    >
        <b-table striped hover :items="getCart"></b-table>  
    </div>
</template>

<script>
    
 import { mapGetters } from 'vuex';
 
 export default {
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters({getCart:"getCart"}),
        },
 };
</script>

<style scoped>

</style>