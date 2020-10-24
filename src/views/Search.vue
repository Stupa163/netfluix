<template>
    <div class="search">
        <input v-model="query" type="text" @keyup="sendSearchRequest" class="search_input" placeholder="Titre du film">

        <MovieList :movies="movies" :loading="loading"/>
    </div>
</template>

<script>
    import TMDB from "../mixins/TMDB";
    import MovieList from "../components/MovieList";

    export default {
        name: "Search",
        components: {MovieList},
        mixins: [TMDB],
        data: function () {
            return {
                query: '',
                movies: [],
                loading: false
            }
        },
        methods: {
            async sendSearchRequest() {
                this.loading = true;
                this.movies = [];
                let res = await this.searchMovies(this.query);
                this.movies = res.results;
                this.loading = false;
            }
        }
    }
</script>

<style scoped lang="scss">
    .search {
        padding-top: 150px;
        background-color: #141414;
        min-height: 100vh;

        .search_input {
            display: block;
            margin: auto auto 30px;
            padding: 10px;
        }
    }
</style>
