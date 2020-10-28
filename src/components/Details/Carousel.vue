<template>
    <b-carousel id="carousel-1" :interval="4000" controls>
        <b-carousel-slide v-for="(image, key) in images" :img-src="image" :key="key"/>
    </b-carousel>
</template>

<script>
    export default {
        name: "Carousel",
        props: {
            images: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>
