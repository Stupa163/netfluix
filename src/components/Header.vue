<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="dark"
      fixed="top"
      style="
        background-image: linear-gradient(
          0deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(0, 0, 0, 1) 100%
        );
      "
    >
      <b-navbar-brand href="#">
        <img src="../assets/logo.png" alt="logo" width="160vh" />
      </b-navbar-brand>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-button
          v-if="!isLogged"
          variant="danger"
          size="md"
          class="my-2 my-sm-0"
          @click="login"
          >S'indentifier via TMDB</b-button
        >
        <b-dropdown
          v-else
          right
          size="lg"
          variant="link"
          toggle-class="text-decoration-none"
          no-caret
        >
          <template #button-content>
            <img
              src="https://www.gravatar.com/avatar/3b068c41997cbf52a1d55dc483d3f266"
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
          <b-dropdown-item @click="logout(getSessionID)">Se déconnecter</b-dropdown-item>
        </b-dropdown>

      </b-navbar-nav>
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
      logout: "getLogout"
    }),
  },
  computed: {
    ...mapGetters(["getUsername", "isLogged", "getAvatarURL", "getSessionID"]),
  },
};
</script>

<style scoped lang="scss">
.navbar-default {
  background-color: transparent;
}
</style>
