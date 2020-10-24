import APIConfig from "../config/api.config";

const ENDPOINTS = {
    POPULAR: '/movie/popular',
    LATEST: '/movie/latest',
    BEST: '/movie/top_rated',
    UPCOMING: '/movie/upcoming',
    PLAYING_NOW: '/movie/now_playing',
    DETAILS: '/movie',
    SEARCH: '/search/movie'
};

export default {
    methods: {
        getPopularMovies: async (page = 1) => {
            let res = await executeRequest(ENDPOINTS.POPULAR, {page});
            return await res.json();
        },
        getLatestMovie: async () => {
            let res = await executeRequest(ENDPOINTS.LATEST);
            return await res.json();
        },
        getBestMovie: async () => {
            let res = await executeRequest(ENDPOINTS.BEST);
            return await res.json();
        },
        getUpcomingMovies: async (page = 1) => {
            let res = await executeRequest(ENDPOINTS.UPCOMING, {page});
            return await res.json();
        },
        getPlayingNowMovies: async (page = 1) => {
            let res = await executeRequest(ENDPOINTS.PLAYING_NOW, {page});
            return await res.json();
        },
        getMovieDetails: async (id) => {
            let res = await executeRequest(`${ENDPOINTS.DETAILS}/${id}`)
            return await res.json();
        },
        searchMovies: async (search) => {
            let res = await executeRequest(ENDPOINTS.SEARCH, {query: encodeURI(search)});
            return await res.json();
        }
    }
}

async function executeRequest(endpoint, params = {}) {
    let url = `${APIConfig.apiUrl}${endpoint}?api_key=${APIConfig.apiKey}&language=fr-FR`;
    for (const [key, value] of Object.entries(params)) {
        url += `&${key}=${value}`;
    }
    return await fetch(url);
}
