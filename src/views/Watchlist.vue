<template>
  <b-container fluid class="watchlist"> 
    <b-row>
      <b-col>
        <h1>Mes séries...</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <MovieList :movies="watchlist" :loading="false"/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions,mapGetters } from "vuex";
import MovieList from "../components/MovieList"

export default {
  name: "Watchlist",
  data: function () {
   return {
     watchlist: []
   } 
  },
  components:{MovieList},
  methods: {
    ...mapActions(["getWatchlistMovie"]),
  },
  computed: {
    ...mapGetters(["getAccountID", "getSessionID"]),
  },
  async mounted() {
    let account = {
      account_id: this.getAccountID,
      session_id: this.getSessionID,
    };

    let watchlist = await this.getWatchlistMovie(account).then(res => this.watchlist = res.results);

  },
};
</script>

<style lang="scss" scoped>
.watchlist {
  padding-top: 10vh;
  
  &.container-fluid {
    background-color: #141414;
  }
}
</style>