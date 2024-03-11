import { MOVIE_API_URL } from "@/utils/config";

export const API_KEY = "4dff114364cc0c22d04c95af2496e25c";

export const BACKDROP_URL_SMALL = "https://image.tmdb.org/t/p/w500";
export const POSTER_URL = "https://image.tmdb.org/t/p/w500";

export const API_REQUESTS = {
  requestPopular: `${MOVIE_API_URL}/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  requestTopUpcoming: `${MOVIE_API_URL}/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  requestTopRated: `${MOVIE_API_URL}/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  requestTrending: `${MOVIE_API_URL}/3/trending/all/day?api_key=${API_KEY}`,
  requestSciFi: `${MOVIE_API_URL}/3/discover/movie?api_key=${API_KEY}&with_genres=878`,
  requestWar: `${MOVIE_API_URL}/3/discover/movie?api_key=${API_KEY}&with_genres=10752`,
  requestCrime: `${MOVIE_API_URL}/3/discover/movie?api_key=${API_KEY}&with_genres=80`,
  requestAnimation: `${MOVIE_API_URL}/3/discover/movie?api_key=${API_KEY}&with_genres=16`,
  requestHorror: `${MOVIE_API_URL}/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
  requestComedy: `${MOVIE_API_URL}/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
  requestAdventure: `${MOVIE_API_URL}/3/discover/movie?api_key=${API_KEY}&with_genres=12`,
  requestDrama: `${MOVIE_API_URL}/3/discover/movie?api_key=${API_KEY}&with_genres=18`,
};
