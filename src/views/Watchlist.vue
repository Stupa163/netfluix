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
import { mapGetters } from "vuex";
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
    async getWatchlistMovie(account_id, session_id) {
      return fetch(
        `${APIConfig.apiUrl}/account/${account_id}/watchlist/movies?api_key=${APIConfig.apiKey}&language=fr-FR&session_id=${session_id}`
      )
        .then((response) => response.json())
        .then((json) => {
          console.log("✔️ Watchlist obtenue !");
          console.log(json);
          return json;
        })
        .catch((err) => console.error(err));
    },
    async addMovieWatchlist(account_id, session_id, media_id) {
      let options = {
        method: "POST",
        body: JSON.stringify({
          media_type: "movie",
          media_id: media_id,
          watchlist: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      };

      return fetch(
        `${APIConfig.apiUrl}/account/${account_id}/watchlist?api_key=${APIConfig.apiKey}&session_id=${session_id}`,
        options
      )
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
        })
        .catch((err) => console.error(err));
    },
    async deleteMovieWatchlist(account_id, session_id, media_id) {
      let options = {
        method: "POST",
        body: JSON.stringify({
          media_type: "movie",
          media_id: media_id,
          watchlist: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      };

      return fetch(
        `${APIConfig.apiUrl}/account/${account_id}/watchlist?api_key=${APIConfig.apiKey}&session_id=${session_id}`,
        options
      )
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
        })
        .catch((err) => console.error(err));
    },
  },
  computed: {
    ...mapGetters(["getAccountID", "getSessionID"]),
  },

  async mounted() {
    this.getWatchlistMovie(this.getAccountID, this.getSessionID).then(
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