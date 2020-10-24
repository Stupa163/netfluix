<template>
    <div class="latest">
        <div class="title">
            <h1>Nouveautées :</h1>
        </div>
        <b-container class="container">
            <b-row>
                <b-col class="col" col lg="3" v-for="movie in movies">
                    <Movie :id="movie.id" :poster_path="movie.poster_path"/>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import TMDB from "../mixins/TMDB";
    import Movie from "../components/Movie";

    export default {
        name: "Latest",
        components: {Movie},
        mixins: [TMDB],
        data: function () {
            return {
                movies: []
            }
        },
        async mounted() {
            let res = await this.getPlayingNowMovies();
            this.movies = res.results;
        }
    }
</script>

<style scoped lang="scss">
    .latest {
        padding-top: 200px;
        background-color: #141414;
        color: white;

        .title {
            padding-bottom: 50px;
            padding-left: 5vw;
        }

        .container {
            max-width: 90vw;
            margin-left: 5vw;

            .col {
                padding-bottom: 50px;
                padding-left: 0;
                padding-right: 0;
            }
        }
    }
</style>
