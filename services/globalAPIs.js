import axios from "axios";

export const nowPlayingMoviesApi = async () => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_TMDB_API_URL}/3/movie/now_playing`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_ACCESS_TOKEN}`,
        },
      }
    );
    return res;
  } catch (error) {
    console.error(error);
  }
};
