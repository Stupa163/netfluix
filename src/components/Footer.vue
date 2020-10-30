<template>
  <footer class="disable-no-mobile">
    <b-container class="text-center text-light">
      <b-row class="px-0">
        <b-col>
            <router-link :to="{name: 'Latest'}">
                <b-icon-book font-scale="1.2" :style="{color: this.$route.name === 'Latest' ? 'darkslateblue' : 'white'}"/>
            </router-link>
        </b-col>
        <b-col>
            <router-link :to="{name: 'Watchlist'}">
                <b-icon-bookmarks font-scale="1.2" :style="{color: this.$route.name === 'Watchlist' ? 'darkslateblue' : 'white'}"/>
            </router-link>
        </b-col>
        <b-col>
            <router-link :to="{name: 'Search'}">
                <b-icon-search font-scale="1.2" :style="{color: this.$route.name === 'Search' ? 'darkslateblue' : 'white'}"/>
            </router-link>
        </b-col>
        <b-col>|</b-col>
        <b-col>
            <b-icon-power @click="logout(getSessionID)" font-scale="1.2"/>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
import { BIconBook, BIconPower, BIconBookmarks, BIconSearch } from "bootstrap-vue";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  components: {
    BIconBook,
    BIconPower,
    BIconBookmarks,
    BIconSearch
  },
  methods: {
      ...mapActions({
          logout: "getLogout"
      })
  },
  computed: {
      ...mapGetters([
          "getSessionID"
      ])
  }
};
</script>

<style lang="scss">
footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  /* Set the fixed height of the footer here */
  height: 60px;
  line-height: 60px; /* Vertically center the text there */
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 1) 100%
  );
}

.disable-no-mobile {
  @media screen and (min-width: 990px) {
    display: none;
  }
}

.col>a {
    color: white;
    transition: color 0.1s ease-in-out;

    &:active{
        color:darkslateblue;
    }
}
</style>