const API_KEY = process.env.API_KEY;

export default {
    
    TopRatedMovies: {
        title: 'Top Rated',
        url: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    },
    UpcomingMovies: {
        title: 'Upcoming Movies',
        url: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
        
    },
    PopularMovies: {
        title: 'Popular',
        url: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    },
    NowPlayingMovies: {
        title: 'Now Playing',
        url: `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
    },
    TVTopRated: {
        title: 'TV Top Rated',
        url: `/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    },
    TVAiringToday: {
        title: 'TV Airing Today',
        url: `/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    },
    
};