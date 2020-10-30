<template>
    <div class="search">
        <input v-model="query" type="text" @keyup="sendSearchRequest" class="search_input" placeholder="Titre du film">
        <b-container class="movie_container">
            <b-row>
                <b-col col lg="2" class="buttons_container">
                    <b-row v-for="genre in genres" :key="genre.id" class="genre">
                        <b-col col lg="7" offset="1">{{genre.name}}</b-col>
                        <b-col col lg="4">
                            <ToggleButton v-model="genre.model"/>
                        </b-col>
                    </b-row>
                </b-col>
                <b-col col lg="10">
                    <MovieList :movies="displayedMovies" :loading="loading"/>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import TMDB from "../mixins/TMDB";
    import MovieList from "../components/MovieList";
    import Utils from "../mixins/Utils";
    import { ToggleButton } from 'vue-js-toggle-button'

    export default {
        name: "Search",
        components: {MovieList, ToggleButton},
        mixins: [TMDB, Utils],
        data: function () {
            return {
                query: '',
                movies: [],
                displayedMovies: [],
                loading: false,
                page: 1,
                genres: [],
            }
        },
        async mounted() {
            this.scroll();
            let resMovies = await this.getPlayingNowMovies();
            let resGenres = await this.getGenres();
            this.genres = resGenres.genres.map(genre => ({...genre, model: true}));
            this.movies = this.filterMovies(resMovies.results, this.genres);
        },
        watch: {
            'genres': {
                deep: true,
                handler: 'filter'
            }
        },
        methods: {
            filter() {
                this.displayedMovies = this.getDisplayedMovies();
            },
            getDisplayedMovies() {
                return this.filterMovies(this.movies, this.genres).filter((movie) => !movie.hidden);
            },
            resetVars() {
                this.loading = true;
                this.page = 1;
                this.movies = [];
            },
            async sendSearchRequest() {
                this.resetVars();
                let res = await this.searchMovies(this.query);
                this.movies = this.filterMovies(res.results, this.genres);
                this.filter();
                this.loading = false;
            },
            scroll() {
                window.onscroll = async () => {
                    if (this.isScrolledToBottom()) {
                        this.page++;
                        let res = (this.query === '')
                            ? await this.getPlayingNowMovies(this.page)
                            : await this.searchMovies(this.query, this.page);
                        this.movies = this.movies.concat(this.filterMovies(res.results, this.genres));
                        this.filter();
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

        .movie_container {
            margin: 0;
            max-width: 100%;
            width: 91vw;
            padding: 0;

            .buttons_container {
                .genre {
                    padding-top: 10px;
                    color: white;
                }
            }
        }

        .search_input {
            display: block;
            margin: auto auto 30px;
            padding: 10px;
        }
    }
</style>
