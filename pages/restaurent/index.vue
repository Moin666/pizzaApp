<template>
    <div class="container">
        <div>
            <h1 class="text-center">Restaurent</h1>
            <Select @selectValue="dropDownSelected = $event" />
        </div>
        <AppRestaurent :dataSource="filteredData"/>
    </div>
</template>


<script>
import AppRestaurent from '@/components/app-restaurent/AppRestaurent'
import Select from '@/components/select/Select.vue'
import { mapState } from 'vuex';


export default {
    components: {
        AppRestaurent, Select
    },
    data() {
        return {
            dropDownSelected: ''
        }
    },
    methods: {
        selector(value) {
            console.log('child emiting events', value)
        }
    },
    computed: {
        ...mapState([
            'foodData',
        ]),
        filteredData(){
           if(this.dropDownSelected ){
               return this.foodData.filter(item =>{
                    let name = item.name.toLowerCase()
                        return name.includes(this.dropDownSelected.toLowerCase())
                })
            }
            return this.foodData;
        }
    },

    beforeCreate () {
        console.log('before created');
    },

    created () {
        console.log('created');
    },
}
</script>

<style></style>