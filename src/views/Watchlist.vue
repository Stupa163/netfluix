<template>
  <b-container fluid class="watchlist">
    <!-- <b-row>
      <b-col>
        <b-alert dismissible show variant="danger">Danger Alert</b-alert>
      </b-col>
    </b-row> -->
    <b-row>
      <b-col>
        <h1 class="text-light" style="margin-left: 10vh">Mes séries...</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <MovieList :movies="watchlist" :loading="false" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters,mapActions } from "vuex";
import MovieList from "../components/MovieList";
import APIConfig from "../config/api.config";

export default {
  name: "Watchlist",
  data: function () {
    return {
      watchlist: [],
    };
  },
  components: { MovieList },
  methods: {
    ...mapActions([
      "addMovieWatchlist",
      "getWatchlistMovie"
    ])
  },
  computed: {
    ...mapGetters(["getAccountID", "getSessionID"]),
  },

  async mounted() {
    this.getWatchlistMovie({'account_id': this.getAccountID, 'session_id': this.getSessionID}).then(
      (res) => (this.watchlist = res.results)
    );
  },
};
</script>

<style lang="scss" scoped>
.watchlist {
  padding-top: 15vh;

  &.container-fluid {
    background-color: #141414;
  }
}
</style>