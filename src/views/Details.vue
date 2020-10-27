<template>
  <div v-if="movie" class="details">
    <div class="back">
      <router-link :to="{ name: 'Latest' }"> < Retour à la liste </router-link>
    </div>
    <b-container class="content">
      <b-row class="title">
        <b-col col lg="12">
          <h1>{{ movie.title }}</h1>
          <h2>({{ movie.original_title }})</h2>
        </b-col>
      </b-row>
      <b-row>
        <b-col col lg="2" offset="1">
          <Carousel :images="images" />
        </b-col>
        <b-col col lg="7" offset="1">
          <b-container class="infos">
            <ReleaseDate :release_date="movie.release_date" />
            <Genres :genres="movie.genres" />
            <ProducedBy :companies="movie.production_companies" />
            <Rating :note="movie.vote_average" />
            <b-button-group>
              <b-button size="sm" class="rounded-circle" v-b-tooltip.hover.bottom="'Ajouter à la liste de suivie'" variant="outline-secondary"><b-icon-bookmark/></b-button>
            </b-button-group>
            <Overview :overview="movie.overview" />
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
import Carousel from "../components/Details/Carousel";
import Overview from "../components/Details/Overview";
import Rating from "../components/Details/Rating";
import ProducedBy from "../components/Details/ProducedBy";
import Genres from "../components/Details/Genres";
import ReleaseDate from "../components/Details/ReleaseDate";
import Recommendations from "../components/Details/Recommendations";
import APIConfig from "../config/api.config";
import { BootstrapVue, BIconBookmark, BIconBookmarkCheck} from 'bootstrap-vue'
import { mapGetters } from 'vuex'

export default {
  name: "Details",
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
  mixins: [TMDB],
  data: function () {
    return {
      movie: null,
      recommendations: [],
      images: [],
    };
  },
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
    async isMovieWatchlist(account_id,session_id,movie_id){
        return fetch(`${APIConfig.apiUrl}/account/${account_id}/watchlist/movies?api_key=${APIConfig.apiKey}&session_id=${session_id}`)
            .then(response => response.json())
                .then(json => {
                    let res = json.results.filter(id_exist => {
                        return id_exist.id
                    })
                    console.log(res)
                })
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
      },
    },
  },
  async mounted() {
    this.getMovieAndRecommendations();
    console.log()
    this.isMovieWatchlist(this.getAccountID,this.getSessionID)
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
