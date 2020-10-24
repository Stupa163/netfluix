import Vue from 'vue'
import Vuex from 'vuex'
import APIConfig from '../config/api.config'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      session_id: localStorage.getItem("session_id") || null,
      username: "",
      avatar_url: ""
    }
  },
  mutations: {
    setSessionID(state, session_id) {
      state.user.session_id = session_id
    },

    setUser(state, user) {
      state.user.username = user.username
      state.user.avatar_url = user.avatar.gravatar.hash
    }
  },
  getters: {
    isLogged(state) {
      return state.user.session_id != null
    },
    getUsername(state) {
      return state.user.username
    },
    getAvatarURL(state) {
      return state.user.avatar_url
    },
    getSessionID(state) {
      return state.user.session_id
    }
  },
  actions: {
    async getRequestToken(context) {
      console.log('📜 Récup token...')

      return fetch(`${APIConfig.apiUrl}/authentication/token/new?api_key=${APIConfig.apiKey}`)
        .then((response) => response.json())
        .then((json) => { return json })
        .catch((err) => { console.error(err) })
    },

    async getAuthorization({ dispatch }) {
      //Demande de récupération du request_token pour création du lien d'autorisation
      let request_token = await dispatch('getRequestToken')

      //Redirection vers le lien d'autorisation TMDB
      //console.log(`https://www.themoviedb.org/authenticate/${request_token.request_token}?redirect_to=http://localhost:8080/login`)
      window.location.href = `https://www.themoviedb.org/authenticate/${request_token.request_token}?redirect_to=http://localhost:8080/login`
    },

    async getSessionID(context, request_token) {

      //Récupération de la session_id
      return fetch(`${APIConfig.apiUrl}/authentication/session/new?api_key=${APIConfig.apiKey}&request_token=${request_token}`, { method: 'POST' })
        .then((response) => response.json())
        .then((json) => {

          console.log('✔️ Session ID obtenue !')

          //Stockage du session ID dans le localstorage et dans le store
          localStorage.setItem('session_id', json.session_id)
          context.commit('setSessionID', json.session_id)

          //Return du session ID
          return json.session_id

        })
        .catch((err) => console.error(err))
    },

    async getUserAccount(context, session_id) {

      //Récupération infos user
      return fetch(`${APIConfig.apiUrl}/account?api_key=${APIConfig.apiKey}&session_id=${session_id}`)
        .then((response) => response.json())
        .then((json) => {
          console.log('✔️ Infos utilisateur obtenue !')
          console.log(json)

          //Mise à jour objet user
          context.commit('setUser', json)

          //Return de l'objet 'user'
          return json
        })
        .catch((err) => console.error(err))
    },

    async getLogout(context, session_id) {
      //Déconnexion de l'utilisateur de l'API de TMDB
      
      let options = {
        method: 'DELETE',
        body: JSON.stringify({"session_id": session_id}),
        headers: {
          'Content-Type': 'application/json'
        }
      }

      return fetch(`${APIConfig.apiUrl}/authentication/session?api_key=${APIConfig.apiKey}`,options)
        .then(response => response.json())
        .then(json => {
          console.log('✔️ Utilisateur déconnecté !')
          console.log(json)

          //Supprimé du localstorage
          localStorage.removeItem('session_id')

          //Redirection de l'utilisateur vers la page home
          window.location.reload()
        })
        .catch(err => console.error(err))
    }
  }
})
