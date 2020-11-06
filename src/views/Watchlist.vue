<template>
    <div class="watchlist">
        <b-container>
            <b-row>
                <b-col>
                    <h1 class="text-light" style="margin-left: 10vh">Mes séries...</h1>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <MovieList :movies="watchlist" :loading="false"/>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import MixinsWatchlist from "../mixins/MixinsWatchlist"
    import MovieList from "../components/MovieList";

    export default {
        name: "Watchlist",
        data: function () {
            return {
                watchlist: [],
            };
        },
        components: {MovieList},
        mixins: [MixinsWatchlist],
        computed: {
            ...mapGetters(["getAccountID", "getSessionID"]),
        },

        async mounted() {
            this.getWatchlistMovie(this.getAccountID, this.getSessionID)
                .then(response => {
                    this.watchlist = response
                })
                .catch(err => console.error(err))
        }
    }
</script>

<style lang="scss" scoped>
    .watchlist {
        background-color: #141414;
        padding-top: 15vh;
        min-height: 100vh;

        .container {
            max-width: 100vw;
        }
    }
</style>

