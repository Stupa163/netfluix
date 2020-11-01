<template>
    <div v-if="movie" class="details">
        <b-container class="content">
            <b-row class="title">
                <b-col col lg="12">
                    <h1>{{ movie.title }}</h1>
                    <h2>({{ movie.original_title }})</h2>
                </b-col>
            </b-row>
            <b-row>
                <b-col col lg="2" cols="12" offset-lg="1">
                    <Carousel :images="images"/>
                </b-col>
                <b-col col lg="7" offset="1">
                    <b-container class="infos">
                        <ReleaseDate :release_date="movie.release_date"/>
                        <Genres :genres="movie.genres"/>
                        <ProducedBy :companies="movie.production_companies"/>
                        <Rating :note="movie.vote_average"/>
                        <b-button-group>
                            <b-button
                                    @click="!isPresentInWatchlist ? add(getAccountID, getSessionID, $route.params.id) : remove(getAccountID, getSessionID, $route.params.id)"
                                    size="sm" class="rounded-circle"
                                    v-b-tooltip.hover.bottom="`${!isPresentInWatchlist ? 'Ajouter' : 'Retirer'} à la liste de suivie`"
                                    variant="outline-secondary">
                                <b-icon-bookmark v-if="!isPresentInWatchlist"/>
                                <b-icon-bookmark-check v-else/>
                            </b-button>
                        </b-button-group>
                        <Overview :overview="movie.overview"/>
                    </b-container>
                </b-col>
            </b-row>
        </b-container>

        <div class="recommendations_container text-center">
            <h1>Vous pourriez aussi aimer</h1>
            <Recommendations
                    :recommendations="recommendations"
                    v-if="recommendations.length !== 0"
            />
            <div v-else class="text-center no_recommendations">
                <h1>Aucun film similaire trouvé</h1>
            </div>
        </div>
    </div>
</template>

<script>
    import TMDB from "../mixins/TMDB";
    import MixinsWatchlist from "../mixins/MixinsWatchlist"
    import Carousel from "../components/Details/Carousel";
    import Overview from "../components/Details/Overview";
    import Rating from "../components/Details/Rating";
    import ProducedBy from "../components/Details/ProducedBy";
    import Genres from "../components/Details/Genres";
    import ReleaseDate from "../components/Details/ReleaseDate";
    import Recommendations from "../components/Details/Recommendations";
    import APIConfig from "../config/api.config";
    import {BIconBookmark, BIconBookmarkCheck} from 'bootstrap-vue'
    import {mapGetters} from 'vuex'

    export default {
        name: "Details",
        data: function () {
            return {
                movie: null,
                recommendations: [],
                images: [],
                isPresentInWatchlist: false
            };
        },
        components: {
            Recommendations,
            Carousel,
            Overview,
            Rating,
            ProducedBy,
            Genres,
            ReleaseDate,
            BIconBookmark,
            BIconBookmarkCheck
        },
        mixins: [TMDB, MixinsWatchlist],
        methods: {
            async getMovieAndRecommendations() {
                this.images = [];
                this.movie = await this.getMovieDetails(this.$route.params.id);
                this.getImages();
                let recommendations = await this.getRecommendations(
                    this.$route.params.id
                );
                this.recommendations = recommendations.results;
            },

            getImages() {
                this.movie.poster_path
                    ? this.images.push(
                    `https://image.tmdb.org/t/p/w370_and_h556_bestv2/${this.movie.poster_path}`
                    )
                    : null;
                this.movie.backdrop_path
                    ? this.images.push(
                    `https://image.tmdb.org/t/p/w370_and_h556_bestv2/${this.movie.backdrop_path}`
                    )
                    : null;
                this.images.length === 0
                    ? (this.images = [APIConfig.defaultPosterImage])
                    : null;
            },

            async add(account_id, session_id, movie_id) {
                //Ajout du film dans la watchlist
                this.addMovieWatchlist(account_id, session_id, movie_id)
                    .then(response => {
                        console.log(response)
                        this.isPresentInWatchlist = true
                    })
                    .catch(err => console.error(err))
            },

            async remove(account_id, session_id, movie_id) {
                //Suppression du film de la watchlist
                this.deleteMovieWatchlist(account_id, session_id, movie_id)
                    .then(response => {
                        console.log(response)
                        this.isPresentInWatchlist = false
                    })
                    .catch(err => console.error(err))
            }
        },
        computed: {
            ...mapGetters([
                "getAccountID",
                "getSessionID"
            ])
        },
        watch: {
            $route: {
                deep: true,
                handler: function () {
                    this.getMovieAndRecommendations();
                    window.scrollTo(0, 0);
                },
            },
        },
        async mounted() {
            this.getMovieAndRecommendations();

            this.isMovieWatchlist(this.getAccountID, this.getSessionID, this.$route.params.id)
                .then(response => this.isPresentInWatchlist = response)
        },
    };
</script>

<style scoped lang="scss">
    .details {
        padding-top: 150px;
        width: calc(100vw - 15px);
        overflow: hidden;
        background-color: #141414;
        color: white;

        @media screen and (max-width: 1024px) {
            width: 100vw;
        }

        .recommendations {
            padding-right: 50px;
        }

        .back {
            padding-left: 75px;

            a {
                color: white;
                text-decoration: underline;
            }
        }

        .container {
            margin: 0;
            width: 100%;
            max-width: 100%;
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

        .recommendations_container {
            padding-top: 100px;

            h1 {
                padding-bottom: 50px;
            }

            .no_recommendations {
                padding-top: 50px;
            }
        }
    }
</style>
