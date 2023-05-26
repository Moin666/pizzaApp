<template>
    <section class="masthead" role="img" aria-label="Image Description">
        <h1>
            Nuxt Food App </h1>
        <button>
            When a hero comes along
        </button>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.masthead {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    width: 100%;
    height: 60vh;
    /* if you don't want it to take up the full screen, reduce this number */
    overflow: hidden;
    background-size: cover !important;
    background: url(~/static/images/taco-taco.jpg) no-repeat center center scroll;
}

h1 {
    font-style: normal;
    font-weight: bold;
    color: #eee;
    font-size: 11vmin;
    letter-spacing: 0.03em;
    line-height: 1;
    text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
    margin-bottom: 89px;
}

button {
    background: #146d7b;
    transition: background-color ease .25s;
    border-radius: 19px;
    display: inline-block;
    border: none;
    padding: 0.75rem 1.5rem;
    margin: 0;
    text-decoration: none;
    color: #ffffff;
    font-size: 1.2rem;
    cursor: pointer;
    text-align: center;

}

button:hover {
    background: #b76284
}

button:focus {
    outline: 1px solid #fff;
    outline-offset: -4px;
}
</style>