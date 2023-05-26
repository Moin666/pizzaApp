<template>
    <div class="page-container " style="background-color: orange;">
        <div class="content-wrap bg-primary">
            <AppHeader />
            <nuxt />
        </div>
        <AppFooter />
    </div>
</template>
<script>

import AppHeader from '~/components/app-header/AppHeader.vue'
import AppFooter from '~/components/app-footer/AppFooter.vue'
export default {
    components: {
        AppHeader,
        AppFooter
    },
}
</script>

<style>

.page-container {
    position: relative;
    min-height: 100vh;
}

.content-wrap {
    padding-bottom: 2.5rem;
    /* Footer height */
}

footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 3rem;
    /* Footer height */
}

html {
    font-family: 'Poppins', sans-serif;
    font-size: 300;
}

h1,
h2,
h3,
h4 {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
}




</style>