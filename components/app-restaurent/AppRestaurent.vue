<template>
    <div>

        <section class="restaurent">
            <div v-for="store in dataSource" :key="store.id" >
                <h2>{{ store.name }}</h2>
                <p>Delivery Time{{ store.deliveryTime }}</p>
                <p>Rating {{ store.rating }}</p>
                <p v-if="store.freeDelivery">
                    <button>Free Delivery</button>
                </p>
                <div class="row gutter-4">
                    <!-- <div v-for="menuItem in store.menu" :key="menuItem.key" class="col-4 bg-align  "
                        :style="{ background: `url(${require(`@/static/images/${menuItem.img}`)})` }"> -->
                    <div v-for="menuItem in store.menu" :key="menuItem.key" class="col-4 bg-align  ">

                        <div class="h-50" style="height: 200px;,widows: 200px;">
                            <img :src="require(`@/static/images/${menuItem.img}`)" alt="" width="100%"  height="100%">
                        </div>

                        <div class="itemInfo">
                            <div>
                                <h4>{{ menuItem.item }}</h4>
                                <p>{{ menuItem.price }}</p>
                            </div>
                            <nuxt-link :to="`/items/${menuItem.id}`">

                                <button class="gosht">View Item</button>
                            </nuxt-link>
                        </div>

                    </div>

                </div>



            </div>

        </section>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'IndexPage',
    components: {
        
    },
    props: {
        dataSource: {
            type: [Array,Object],
        },
    },
    computed: {
        ...mapState(['foodData']

        )
    },

}
</script>

<style scoped>
.items {
    height: 20vh;
}

.bg-align {
    height: 40vh;
    background-size: cover !important;
    background-repeat: no-repeat;
}
</style>