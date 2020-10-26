<template>
    <div class="recommendations">
        <Carousel3d :controlsVisible="true"
                    :autoplay="false"
                    :display="recommendations.length"
                    class="carousel"
                    :onMainSlideClick="mainSlideClick">
            <Slide v-for="(recommendation, key) in recommendations"
                   :index="key"
                   class="slide"
                   :movieId="recommendation.id"
                   :key="recommendation.id">
                <img :src="`https://image.tmdb.org/t/p/w370_and_h556_bestv2${recommendation.poster_path}`"
                     alt=""
                     v-if="recommendation.poster_path">
                <img v-else :src="defaultImage" alt="">
            </Slide>
        </Carousel3d>
    </div>
</template>

<script>
    import {Carousel3d, Slide} from 'vue-carousel-3d';
    import APIConfig from "../../config/api.config";

    export default {
        components: {Carousel3d, Slide},
        name: "Recommendations",
        data: () => {
            return {
                defaultImage: APIConfig.defaultPosterImage
            }
        },
        props: {
            recommendations: {
                type: Array,
                required: true
            }
        },
        methods: {
            mainSlideClick(event) {
                this.$router.push({name: 'Details', params: {id: this.recommendations[event.index].id}})
            }
        }
    }
</script>

<style scoped lang="scss">
    .recommendations {
        width: 90vw;
        margin-left: 5vw;
        padding-right: 0;

        .carousel {
            height: 556px !important;

            .slide {
                overflow: visible !important;
            }
        }
    }
</style>
