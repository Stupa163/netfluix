<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="dark"
      fixed="top"
      style="background-image: linear-gradient(0deg,rgba(255, 255, 255, 0) 0%,rgba(0, 0, 0, 1) 100%);"
    >
      <b-navbar-brand>
        <router-link :to="{'name': 'Home'}">
          <img src="../assets/logo.png" alt="logo" width="160vh" />
        </router-link>
      </b-navbar-brand>

      <b-navbar-nav v-if="isLogged">
        <b-nav-item :class="{'pr-3': true,'h5': true, 'active': this.$route.name === 'Latest' ? true : false}" :to="{'name': 'Latest'}">Nouveautées</b-nav-item>
        <b-nav-item :class="{'pr-3': true,'h5': true, 'active': this.$route.name === 'Watchlist' ? true : false}" :to="{'name': 'Watchlist'}">Mes séries suivie</b-nav-item>
        <b-nav-item :class="{'pr-3': true,'h5': true, 'active': this.$route.name === 'Search' ? true : false}" :to="{'name': 'Search'}">Rechercher un film</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <!-- Si pas connecté -->
        <b-button
          v-if="!isLogged"
          size="md"
          class="my-2 my-sm-0 bg-darkslateblue no-border"
          @click="login"
          >S'indentifier via TMDB</b-button>

        <!-- Sinon affichage du profil utilisateur -->
        <div v-else>
          <b-nav-text class="text-light">{{getUsername}}</b-nav-text>
          <b-dropdown
          right
          size="lg"
          variant="link"
          toggle-class="text-decoration-none"
          no-caret
        >
          <template #button-content>
            <img
              :src="'https://www.gravatar.com/avatar/'+ getAvatarURL"
              class="rounded"
              width="40vh"
              height="40vh"
              alt=""
            />
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="text-light pl-1 bi bi-caret-down-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
              />
            </svg>
          </template>
          <b-dropdown-item @click="logout(getSessionID)"><span class="font-weight-bold">Se déconnecter</span></b-dropdown-item>
        </b-dropdown>
        </div>

      </b-navbar-nav>
      <!-- ./right-nav-items -->

    </b-navbar>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import APIConfig from "../config/api.config";

export default {
  name: "Header",
  methods: {
    ...mapActions({
      login: "getAuthorization",
      logout: "getLogout",
    }),
  },
  computed: {
    ...mapGetters(["getUsername", "isLogged", "getAvatarURL", "getSessionID"]),
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

ul.dropdown-menu{
  opacity: 0.80 !important;
  background-color: rgb(22, 22, 22) !important;
  border-radius: 2px !important;
  border: 1px solid rgb(65, 65, 65) !important;
}

.dropdown-menu>li>a{
  color: white !important;
    &:hover{
      transition: background-color 0.3s ease-in-out;
      background-color: rgb(51, 51, 51);
      color: white !important;
    }
}
</style>
