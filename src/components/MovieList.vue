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
                <b-col col lg="3" v-for="movie in movies" :key="movie.id">
                    <Movie v-if="movie.poster_path" :id="movie.id"
                           :poster_path="`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${movie.poster_path}`"/>
                    <div v-else class="movie_with_title text-center">
                        <Movie :id="movie.id" :poster_path="defaultImage"/>
                        <h3>{{movie.title}}</h3>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import Movie from "./Movie";
    import APIConfig from "../config/api.config";

    export default {
        name: "MovieList",
        components: {Movie},
        data: () => {
            return {
                defaultImage: APIConfig.defaultPosterImage
            }
        },
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

                .movie_with_title {
                    color: white;
                }
            }
        }
    }
</style>
