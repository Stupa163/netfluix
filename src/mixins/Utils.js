export default {
    methods: {
        isScrolledToBottom: () => {
            return Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight
        },
        filterMovies: (movies, genres) => {

            genres.forEach((genre) => {
                // console.log(`${genre.name} => ${genre.model}`);
            });

            movies.forEach((movie) => {
                let excludeMovie = true;
                movie.genre_ids.forEach((id) => {
                    let genre = genres.filter((genre) => genre.id === id);
                    (genre[0].model) ? excludeMovie = false : null;
                    movie.hidden = excludeMovie;
                    console.log(excludeMovie)
                })
            });

            console.log(movies);
            return movies;
        }
    }
}
