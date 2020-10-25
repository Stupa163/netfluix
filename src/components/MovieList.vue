<template>
    <div class="movie_list">
        <div v-if="loading" class="spinner_container">
            <div class="spinner text-center">
                <b-spinner type="grow" variant="light" class="spinner"/>
                <span class="loading">Chargement</span>
            </div>
        </div>
        <b-container>
            <b-row>
                <b-col v-if="movie.poster_path" col lg="3" v-for="movie in movies" :key="movie.id">
                    <Movie :id="movie.id" :poster_path="movie.poster_path"/>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import Movie from "./Movie";

    export default {
        name: "MovieList",
        components: {Movie},
        props: {
            movies: {
                type: Array,
                required: true
            },
            loading: {
                type: Boolean,
                required: true
            }
        }
    }
</script>

<style scoped lang="scss">
    .movie_list {
        .spinner_container {
            width: 90vw;
            height: 70vh;
            margin-left: 5vw;
            padding-top: 10vh;

            .spinner {
                display: block;
                margin: auto;
                color: white;
            }
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
