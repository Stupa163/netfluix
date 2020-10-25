<template>
    <div class="latest">
        <div class="title">
            <h1>Nouveautées :</h1>
        </div>
        <MovieList :movies="movies" :loading="false"/>
    </div>
</template>

<script>
    import TMDB from "../mixins/TMDB";
    import Movie from "../components/Movie";
    import MovieList from "../components/MovieList";
    import Utils from "../mixins/Utils";

    export default {
        name: "Latest",
        components: {MovieList, Movie},
        mixins: [TMDB, Utils],
        data: function () {
            return {
                movies: [],
                page: 1
            }
        },
        methods: {
            scroll() {
                window.onscroll = async () => {
                    if (this.isScrolledToBottom()) {
                        this.page++;
                        let res = await this.getUpcomingMovies(this.page);
                        this.movies = this.movies.concat(res.results);
                    }
                }
            }
        },
        async mounted() {
            let res = await this.getUpcomingMovies();
            this.movies = res.results;
            this.scroll()
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
