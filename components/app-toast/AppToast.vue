<template>
    <div class="toaster">
        <slot name="header">.</slot>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

.toaster{
    width: 250px;
    border-radius: 15px;
    color: white;
    background: red;
}

</style>
