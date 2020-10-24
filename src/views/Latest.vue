<template>
    <div class="latest">
        <div class="title">
            <h1>Nouveautées :</h1>
        </div>
        <MovieList :movies="movies"/>
    </div>
</template>

<script>
    import TMDB from "../mixins/TMDB";
    import Movie from "../components/Movie";
    import MovieList from "../components/MovieList";

    export default {
        name: "Latest",
        components: {MovieList, Movie},
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
    }
</style>
