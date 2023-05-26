<template>
    <div class="container">
        <div class="row">
            <div class="col-5">
                <img :src="require(`@/static/images/${filteredData[0].img}`)" alt="img-dish" width="100%" height="100%">
            </div>
            <div class="col-7">
                <div class="d-flex">
                    <h1>{{ filteredData[0].item }}</h1>
                    <AppToast v-if="cardSumitted" class="ml-5"> 
                        <div class="p-2">
                            <p class="text-center">Order Recieved <br />Check out More Restaurent</p>

                        </div>
    
                    </AppToast>
                </div>
                <p>{{ filteredData[0].price.toFixed(2) }}</p>
                <div class="d-flex  align-items-center justify-content-between">
                    <div>
                        <input type="text" v-model="valueEnter" class="form-control">
                    </div>
                    <div>
                        <button class="btn  btn-primary" @click="addToCard">Add To Card ${{ combinePrice }}</button>
                    </div>
                </div>


                <div v-if="filteredData[0].options" class="mt-5">
                    <h3>Options</h3>
                    <b-form-radio v-for="radioBtn in filteredData[0].addOns" :key="radioBtn" v-model="options"
                        :aria-describedby="ariaDescribedby" name="options" :value="radioBtn">{{ radioBtn }}</b-form-radio>
                    </b-form-group>
                </div>
                <div v-if="filteredData[0].addOns" class="mt-5">
                    <h3>Add Ons</h3>
                    <b-form-radio v-for="radioBtn in filteredData[0].addOns" :key="radioBtn" v-model="selected"
                        :aria-describedby="ariaDescribedby" name="addOns" :value="radioBtn">{{ radioBtn }}</b-form-radio>
                    </b-form-group>
                </div>
            </div>

        </div>



    </div>
</template>



<script>
import { mapState ,mapActions} from 'vuex'
import AppToast from '@/components/app-toast/AppToast.vue'

export default {
    data() {
        return {
            id: this.$route.params.id,
            valueEnter: 1,
            selected: '',
            cardSumitted: false,
            options:''
        }
    },
    components: {
        AppToast,
    },
    computed: {
        ...mapState(['foodData']),

        valueEnter() {
            this.valueEnter * 9.99
        },
        filteredData() {
            //     let result 
            //   for(let i =0; i < this.foodData.length; i ++){
            //         for (let j =0; j < this.foodData[i].menu.length;j++){
            //                 if(this.foodData[i].menu[j].id == this.id){
            //                     result = this.foodData[i].menu[j]
            //                     break
            //                 }

            //         }
            //   }
            //   return result
            return this.foodData.filter(item => item.menu.find(a => a.id == this.id))[0].menu.filter(item => item.id == this.id)
        },
        combinePrice(){
            return this.valueEnter * 9.99
        }
    },
    methods: {
        ...mapActions({
            updateCard:'updateCard'
        }),
        addToCard() {
            let formOutput = {
                item:this.filteredData[0].item,
                count:this.valueEnter,
                addOns:this.selected,
                combinePrice:this.combinePrice,
                options:this.options,
            }
            this.updateCard(formOutput)
            this.cardSumitted = true
        }
    },
}
</script>

<style scoped></style>