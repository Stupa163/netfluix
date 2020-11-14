import APIConfig from '../config/api.config'

export default {
    methods: {
        addMovieWatchlist: async (account_id,session_id,movie_id) => {
            let options = {
                method: "POST",
                body: JSON.stringify({
                  media_type: "movie",
                  media_id: movie_id,
                  watchlist: true,
                }),
                headers: {
                  "Content-Type": "application/json",
                },
              };

              return fetch(`${APIConfig.apiUrl}/account/${account_id}/watchlist?api_key=${APIConfig.apiKey}&session_id=${session_id}`,options)
                .then((response) => response.json())
                    .then(() => {
                        return true
                    })
                .catch(err => {
                    console.error(err);
                    return false
                });
        },
        deleteMovieWatchlist: async (account_id,session_id,movie_id) => {
            let options = {
                method: "POST",
                body: JSON.stringify({
                  media_type: "movie",
                  media_id: movie_id,
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
                    .then(json => {
                        return true
                    })
                .catch(err => {
                    console.error(err);
                    return false
                });
        },
        isMovieWatchlist: async (account_id,session_id,movie_id) => {
            return fetch(`${APIConfig.apiUrl}/account/${account_id}/watchlist/movies?api_key=${APIConfig.apiKey}&session_id=${session_id}`)
                .then(response => response.json())
                    .then(json => {

                        // Si le film actuelle est présent dans dans la watchlist renvoie true sinon false
                        let res = json.results.filter(id_exist => id_exist.id == movie_id);

                        //Test du filtre
                        return !!(Array.isArray(res) && res.length);
                    })
                .catch(err => console.error(err))
        },
        getWatchlistMovie: async (account_id,session_id) => {
            return fetch(
              `${APIConfig.apiUrl}/account/${account_id}/watchlist/movies?api_key=${APIConfig.apiKey}&language=fr-FR&session_id=${session_id}`
            )
              .then((response) => response.json())
              .then(json => {
                return json.results;
              })
              .catch((err) => console.error(err));
          }
    }
}
