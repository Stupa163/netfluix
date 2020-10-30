<template>
  <div>
    <b-navbar toggleable="lg" type="dark" fixed="top" variant="fade">

      <!-- Logo version bureau/mobile -->
      <b-navbar-brand>
        <router-link :to="{ name: 'Home' }">
          <img
            class="disabled-logo"
            src="../assets/logo.png"
            alt="logo"
            width="160vh"
          />
          <img
            class="minimize-logo"
            src="../assets/logo-2.png"
            alt="logo"
            width="35vh"
          />
        </router-link>
      </b-navbar-brand>
      <!-- ./logo -->

      <!-- Menu de navigation version bureau (version mobile, navigation dans le footer) -->
      <b-navbar-nav v-if="isLogged" class="disabled-logo">
        <b-nav-item
          :class="{
            'pr-3': true,
            h5: true,
            active: this.$route.name === 'Latest' ? true : false,
          }"
          :to="{ name: 'Latest' }"
          >Nouveautées</b-nav-item
        >
        <b-nav-item
          :class="{
            'pr-3': true,
            h5: true,
            active: this.$route.name === 'Watchlist' ? true : false,
          }"
          :to="{ name: 'Watchlist' }"
          >Mes séries suivie</b-nav-item
        >
        <b-nav-item
          :class="{
            'pr-3': true,
            h5: true,
            active: this.$route.name === 'Search' ? true : false,
          }"
          :to="{ name: 'Search' }"
          >Rechercher un film</b-nav-item
        >
      </b-navbar-nav>
      <!-- ./menu-de-navigation -->

      <!-- Profil utilisateur -->
      <b-navbar-nav class="ml-auto">
        <b-button
          v-if="!isLogged"
          size="md"
          class="my-2 my-sm-0 bg-darkslateblue no-border"
          @click="login"
          >S'indentifier via TMDB</b-button
        >

        <div v-else class="disabled-logo">
          <b-nav-text class="text-light">{{ getUsername }}</b-nav-text>
          <b-dropdown right size="lg" variant="link" toggle-class="text-decoration-none" no-caret>

            <template #button-content>
              <img
                :src="'https://www.gravatar.com/avatar/' + getAvatarURL"
                class="rounded"
                width="40vh"
                height="40vh"
                alt=""
              />
              <b-icon-caret-down-fill
                class="pl-1"
                font-scale="1"
                style="color: white"
              />
            </template>

            <b-dropdown-item @click="logout(getSessionID)"><span class="font-weight-bold">Se déconnecter</span></b-dropdown-item>

          </b-dropdown>

        </div>
      </b-navbar-nav>
      <!-- ./profil-utilisateur -->

      <b-navbar-toggle target="nav-collapse" class="no-border">
        <template>
          <img
            :src="'https://www.gravatar.com/avatar/' + getAvatarURL"
            class="rounded-circle"
            width="35vh"
            height="35vh"
            alt=""
          />
        </template>
      </b-navbar-toggle>
      <!-- ./bouton-menu-mobile -->

    </b-navbar>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import APIConfig from "../config/api.config";
import {
  BIconChevronBarDown,
  BIconChevronBarUp,
  BIconCaretDownFill,
} from "bootstrap-vue";
import Utils from "../mixins/Utils";

export default {
  name: "Header",
  data: function () {
    return {
      isMobiles: false,
    };
  },
  methods: {
    ...mapActions({
      login: "getAuthorization",
      logout: "getLogout",
    }),
  },
  components: {
    BIconChevronBarDown,
    BIconChevronBarUp,
    BIconCaretDownFill,
  },
  mixins: [Utils],
  computed: {
    ...mapGetters(["getUsername", "isLogged", "getAvatarURL", "getSessionID"]),
  },
  watch: {
    isMobile: () => {
      //Check du support utilisé
      this.isMobiles = this.isMobile();
    },
  },
};
</script>

<style lang="scss">
.bg-darkslateblue {
  background-color: darkslateblue;
  &:hover {
    background-color: rgb(42, 33, 100);
  }
}
.no-border {
  border: none;
}

ul.dropdown-menu {
  opacity: 0.8 !important;
  background-color: rgb(22, 22, 22) !important;
  border-radius: 2px !important;
  border: 1px solid rgb(65, 65, 65) !important;
}

.dropdown-menu > li > a {
  color: white !important;
  &:hover {
    transition: background-color 0.3s ease-in-out;
    background-color: rgb(51, 51, 51);
    color: white !important;
  }
}

.disabled-logo {
  @media screen and (max-width: 990px) {
    display: none;
  }
}

.minimize-logo {
  @media screen and (min-width: 991px) {
    display: none;
  }
}
</style>
