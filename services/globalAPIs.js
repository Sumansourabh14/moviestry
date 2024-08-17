import axios from "axios";

export const signUpApi = async (name, email, password) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/v1/register`,
    {
      name,
      email,
      password,
    }
  );
  return res;
};

export const loginApi = async (email, password) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/v1/auth/login`,
    {
      email,
      password,
    }
  );
  return res;
};

export const isAuthenticatedApi = async (token) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/v1/user/self`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res;
};

export const addToWatchlistApi = async (
  id,
  adult,
  backdrop_path,
  genre_ids,
  mediaId,
  original_language,
  original_title,
  overview,
  poster_path,
  release_date,
  title,
  token
) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/v1/media/watchlist/${id}`,
    {
      adult,
      backdrop_path,
      genre_ids,
      mediaId,
      original_language,
      original_title,
      overview,
      poster_path,
      release_date,
      title,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res;
};

export const removeFromWatchlistApi = async (id, token) => {
  const res = await axios.delete(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/v1/media/watchlist/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res;
};

export const userWatchlistApi = async (token) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/v1/media/watchlist`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res;
};

export const nowPlayingMoviesApi = async () => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_TMDB_API_URL}/3/movie/now_playingfosdfnsdof`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_ACCESS_TOKEN}`,
      },
    }
  );
  return res;
};

export const movieDetailsApi = async (id) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_TMDB_API_URL}/3/movie/${id}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_ACCESS_TOKEN}`,
      },
    }
  );
  return res;
};

export const searchMoviesApi = async (query) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_TMDB_API_URL}/3/search/movie?query=${query}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_ACCESS_TOKEN}`,
      },
    }
  );
  return res;
};
