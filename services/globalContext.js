"use client";
import { createContext, use, useEffect, useState } from "react";
import {
  addToWatchlistApi,
  isAuthenticatedApi,
  loginApi,
  movieDetailsApi,
  nowPlayingMoviesApi,
  removeFromWatchlistApi,
  searchMoviesApi,
  signUpApi,
  userWatchlistApi,
} from "./globalAPIs";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [error, setError] = useState({ error: false, status: "", message: "" });
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies();
  const [moviestryToken, setMoviestryToken] = useState(cookies.moviestry_token);
  const [watchlistMedia, setWatchlistMedia] = useState([]);
  const router = useRouter();

  const signUp = async (name, email, password) => {
    try {
      setError({
        error: false,
        status: "",
        message: "",
      });
      setLoading(true);
      const res = await signUpApi(name, email, password);
      setLoading(false);
      return res;
    } catch (error) {
      setError({
        error: true,
        status: error.response.status,
        message: error.response.data.message,
      });
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      setError({
        error: false,
        status: "",
        message: "",
      });
      setLoading(true);
      const res = await loginApi(email, password);
      setMoviestryToken(res.data.token);
      setCookie("moviestry_token", res.data.token);
      setLoading(false);
      return res;
    } catch (error) {
      setError({
        error: true,
        status: error.response.status,
        message: error.response.data.message,
      });
      setLoading(false);
    }
  };

  const isUserLoggedIn = async () => {
    try {
      setError({
        error: false,
        status: "",
        message: "",
      });
      setLoading(true);
      const res = await isAuthenticatedApi(moviestryToken);
      setUser(res.data.user);
      // setMoviestryToken(res.data.token);
      // setCookie("moviestry_token", res.data.token);
      setLoading(false);
      return res;
    } catch (error) {
      setLoading(false);
    }
  };

  const getNowPlaying = async () => {
    try {
      const res = await nowPlayingMoviesApi();
    } catch (error) {
      setError({
        error: error.response.data.status_message,
        status: error.response.status,
      });
    }
  };

  const getMovieDetails = async (id) => {
    try {
      setLoading(true);
      const res = await movieDetailsApi(id);
      setLoading(false);
      return res;
    } catch (error) {
      setError({
        error: error.response.data.status_message,
        status: error.response.status,
      });
      setLoading(false);
    }
  };

  const addToWatchlist = async (
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
    title
  ) => {
    try {
      setLoading(true);
      setError({
        error: false,
        status: "",
        message: "",
      });
      const res = await addToWatchlistApi(
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
        moviestryToken
      );
      setLoading(false);
      return res;
    } catch (error) {
      console.error(error);
      setError({
        error: true,
        status: error.response.status,
        message: error.response.data.message,
      });
      setLoading(false);
      return;
    }
  };

  const removeFromWatchlist = async (id) => {
    try {
      setLoading(true);
      setError({
        error: false,
        status: "",
        message: "",
      });
      const res = await removeFromWatchlistApi(id, moviestryToken);
      setLoading(false);
      return res;
    } catch (error) {
      console.error(error);
      setError({
        error: true,
        status: error.response.status,
        message: error.response.data.message,
      });
      setLoading(false);
      return;
    }
  };

  const getUserWatchlist = async () => {
    try {
      setLoading(true);
      setError({
        error: false,
        status: "",
        message: "",
      });
      const res = await userWatchlistApi(moviestryToken);
      setWatchlistMedia(res.data.watchlist);
      setLoading(false);
      return res;
    } catch (error) {
      console.error(error);
      setError({
        error: true,
        status: error.response.status,
        message: error.response.data.message,
      });
      setLoading(false);
      return;
    }
  };

  const searchMovies = async (query) => {
    try {
      setLoading(true);
      const res = await searchMoviesApi(query);
      setLoading(false);
      return res;
    } catch (error) {
      setError({
        error: error.response.data.status_message,
        status: error.response.status,
      });
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setError({
        error: false,
        status: "",
        message: "",
      });
      setLoading(true);

      setMoviestryToken(null);
      removeCookie("moviestry_token");
      setUser(null);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      return;
    }
  };

  useEffect(() => {
    isUserLoggedIn();
  }, [cookies]);

  useEffect(() => {
    // if (!user) {
    //   router.push("/login");
    // }

    if (!!user) {
      getUserWatchlist();
    }
  }, [user]);

  return (
    <GlobalContext.Provider
      value={{
        loading,
        error,
        signUp,
        login,
        logout,
        moviestryToken,
        getNowPlaying,
        getMovieDetails,
        searchMovies,
        user,
        addToWatchlist,
        getUserWatchlist,
        watchlistMedia,
        removeFromWatchlist,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
