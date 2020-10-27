<template>
    <div class="search">
        <input v-model="query" type="text" @keyup="sendSearchRequest" class="search_input" placeholder="Titre du film">

        <MovieList :movies="movies" :loading="loading"/>
    </div>
</template>

<script>
    import TMDB from "../mixins/TMDB";
    import MovieList from "../components/MovieList";
    import Utils from "../mixins/Utils";

    export default {
        name: "Search",
        components: {MovieList},
        mixins: [TMDB, Utils],
        data: function () {
            return {
                query: '',
                movies: [],
                loading: false,
                page: 1,
            }
        },
        async mounted() {
            this.scroll();
            let res = await this.getPlayingNowMovies();
            this.movies = await res.results;
        },
        methods: {
            resetVars() {
                this.loading = true;
                this.page = 1;
                this.movies = [];
            },
            async sendSearchRequest() {
                this.resetVars();
                let res = await this.searchMovies(this.query);
                this.movies = res.results;
                this.loading = false;
            },
            scroll() {
                window.onscroll = async () => {
                    if (this.isScrolledToBottom()) {
                        this.page++;
                        let res = (this.query === '')
                            ? await this.getPlayingNowMovies(this.page)
                            : await this.searchMovies(this.query, this.page);
                        this.movies = this.movies.concat(res.results);
                    }
                }
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
