export default {
    methods: {
        isScrolledToBottom: () => {
            return Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight
        },
        filterMovies: (movies, genres) => {
            movies.forEach((movie) => {
                let excludeMovie = true;
                movie.genre_ids.forEach((id) => {
                    let genre = genres.filter((genre) => genre.id === id);
                    (genre[0].model) ? excludeMovie = false : null;
                    movie.hidden = excludeMovie;
                })
            });

            return movies;
        }
    }
}
