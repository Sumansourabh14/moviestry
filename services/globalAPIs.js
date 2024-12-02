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
  runtime,
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
      runtime,
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

export const usersApi = async () => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/v1/user/users`
  );
  return res;
};

export const addToWatchedApi = async (
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
  runtime,
  token
) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/v1/media/watched/${id}`,
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
      runtime,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res;
};

export const removeFromWatchedApi = async (id, token) => {
  const res = await axios.delete(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/v1/media/watched/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res;
};

export const userWatchedApi = async (token) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/v1/media/watched`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res;
};

export const publicUserWatchedApi = async (userId) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/v1/media/${userId}/watched`
  );
  return res;
};

export const totalWatchTimeApi = async (token) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/v1/media/total-watch-time`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res;
};

export const longestMovieWatchedApi = async (token) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/v1/media/max-watch-time`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res;
};

export const shortestMovieWatchedApi = async (token) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/v1/media/min-watch-time`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
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
