import axios from "axios";

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
