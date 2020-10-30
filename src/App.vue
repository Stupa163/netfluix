<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
<script>
  import Header from "./components/Header";
  import Footer from "./components/Footer";

  import '../registerServiceWorker'

  export default {
    components: {Header, Footer},
    created() {
      //Récupération infos utilisateur pour connexion automatique
      if(this.$store.getters.isLogged){
        this.$store.dispatch('getUserAccount', localStorage.getItem('session_id'))
      }
    }
  }
</script>
