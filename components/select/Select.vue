<template>
<select class="form-select" aria-label="Default select example" @change="$emit('selectValue', $event.target.value)"   >
  <option selected>{{ defaultValue }}</option>
    <option v-for="value in values" :key="value" :value="value" >{{ value }}</option>
</select>
</template>

<script>
export default {
props: {
    defaultValue: {
        type: String,
        default:'-- Please Select a cusine--' 
    },
    values: {
        type: Array,
        default:()=>['Dim Sum','Pizza','Tacos'] 
    },
    
},
}
</script>

<style>

</style>