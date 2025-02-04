import APIConfig from "../config/api.config";

const ENDPOINTS = {
    POPULAR: '/movie/popular',
    LATEST: '/movie/latest',
    BEST: '/movie/top_rated',
    UPCOMING: '/movie/upcoming',
    PLAYING_NOW: '/movie/now_playing',
    DETAILS: '/movie',
    SEARCH: '/search/movie',
    RECOMMENDATIONS: '/movie/id/recommendations',
    GENRES: '/genre/movie/list'
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
            let res = await executeRequest(`${ENDPOINTS.DETAILS}/${id}`);
            return await res.json();
        },
        searchMovies: async (search, page = 1) => {
            let res = await executeRequest(ENDPOINTS.SEARCH, {query: encodeURI(search), page});
            return await res.json();
        },
        getRecommendations: async (id) => {
            let res = await executeRequest(ENDPOINTS.RECOMMENDATIONS.replace('id', id));
            return await res.json();
        },
        getGenres: async () => {
            let res = await executeRequest(ENDPOINTS.GENRES);
            return await res.json();
        }
    }
}

async function executeRequest(endpoint, params = {}) {
    let url = `${APIConfig.apiUrl}${endpoint}?api_key=${APIConfig.apiKey}&language=fr-FR&include_adult=true`;
    for (const [key, value] of Object.entries(params)) {
        url += `&${key}=${value}`;
    }
    return await fetch(url);
}
