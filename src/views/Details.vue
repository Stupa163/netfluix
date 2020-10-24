<template>
    <div v-if="movie" class="details">
        <div class="back">
            <router-link :to="{name: 'Latest'}">
               < Retour à la liste
            </router-link>
        </div>
        <b-container class="content">
            <b-row class="title">
                <b-col><h1>{{movie.title}}</h1>
                    <h2>({{movie.original_title}})</h2></b-col>
            </b-row>
            <b-row>
                <b-col col lg="4">
                    <Carousel :images="[
                        `https://image.tmdb.org/t/p/w370_and_h556_bestv2/${movie.poster_path}`,
                        `https://image.tmdb.org/t/p/w370_and_h556_bestv2/${movie.backdrop_path}`
                    ]"/>
                </b-col>
                <b-col col lg="7" offset="1">
                    <b-container class="infos">
                        <ReleaseDate :release_date="movie.release_date"/>
                        <Genres :genres="movie.genres"/>
                        <ProducedBy :companies="movie.production_companies"/>
                        <Rating :note="movie.vote_average"/>
                        <Overview :overview="movie.overview"/>
                    </b-container>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import TMDB from "../mixins/TMDB";
    import Carousel from "../components/Details/Carousel";
    import Overview from "../components/Details/Overview";
    import Rating from "../components/Details/Rating";
    import ProducedBy from "../components/Details/ProducedBy";
    import Genres from "../components/Details/Genres";
    import ReleaseDate from "../components/Details/ReleaseDate";

    export default {
        name: "Details",
        components: {Carousel, Overview, Rating, ProducedBy, Genres, ReleaseDate},
        mixins: [TMDB],
        data: function () {
            return {
                movie: null
            }
        },
        async mounted() {
            this.movie = await this.getMovieDetails(this.$route.params.id);
            console.log(this.movie)
        }
    }
</script>

<style scoped lang="scss">
    .details {
        padding-top: 150px;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        background-color: #141414;
        color: white;

        .back {
            padding-left: 75px;
            a {
                color: white;
                text-decoration: underline;
            }
        }

        .title {
            text-align: center;
            padding-bottom: 30px;

            h1 {
                font-size: 50px;
                font-weight: bold;
            }
        }

        .infos {
            padding-top: 10px;

            & > * {
                padding-top: 20px;
            }
        }
    }
</style>
