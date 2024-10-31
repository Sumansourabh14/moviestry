"use client";
import reloadWebsite from "@/utils/functions/reloader";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import {
  addToWatchedApi,
  addToWatchlistApi,
  isAuthenticatedApi,
  loginApi,
  longestMovieWatchedApi,
  movieDetailsApi,
  removeFromWatchedApi,
  removeFromWatchlistApi,
  shortestMovieWatchedApi,
  signUpApi,
  totalWatchTimeApi,
  userWatchedApi,
  userWatchlistApi,
} from "./globalAPIs";
import { fetchMoviesApi, searchMoviesApi } from "./tmdbAPI";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [error, setError] = useState({ error: false, status: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies();
  const [moviestryToken, setMoviestryToken] = useState(cookies.moviestry_token);
  const [watchlistMedia, setWatchlistMedia] = useState([]);
  const [watchedMedia, setWatchedMedia] = useState([]);
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
      setLoading(false);
      if (error.message === "Network Error") {
        setError({
          error: true,
          status: 500,
          message: error.message,
        });
      } else {
        setError({
          error: true,
          status: error.response.status,
          message: error.response.data.message,
        });
      }
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
      setLoading(false);
      setError({
        error: true,
        status: error.response.status,
        message: error.response.data.message,
      });
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

  const getMovies = async (endpoint) => {
    try {
      setLoading(true);
      const res = await fetchMoviesApi(endpoint);
      setLoading(false);
      return res;
    } catch (error) {
      setError({
        error: true,
        status: error.response.status,
        message: error.response.data.status_message,
      });
      setLoading(false);
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
    title,
    runtime
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
        runtime,
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

  const addToWatched = async (
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
    runtime
  ) => {
    try {
      setLoading(true);
      setError({
        error: false,
        status: "",
        message: "",
      });
      const res = await addToWatchedApi(
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

  const removeFromWatched = async (id) => {
    try {
      setLoading(true);
      setError({
        error: false,
        status: "",
        message: "",
      });
      const res = await removeFromWatchedApi(id, moviestryToken);
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

  const getUserWatched = async () => {
    try {
      setLoading(true);
      setError({
        error: false,
        status: "",
        message: "",
      });
      const res = await userWatchedApi(moviestryToken);
      setWatchedMedia(res.data.watched);
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

  const getUserTotalWatchTime = async () => {
    try {
      setLoading(true);
      setError({
        error: false,
        status: "",
        message: "",
      });
      const res = await totalWatchTimeApi(moviestryToken);
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

  const getUserLongestWatchTime = async () => {
    try {
      setLoading(true);
      setError({
        error: false,
        status: "",
        message: "",
      });
      const res = await longestMovieWatchedApi(moviestryToken);
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

  const getUserShortestWatchTime = async () => {
    try {
      setLoading(true);
      setError({
        error: false,
        status: "",
        message: "",
      });
      const res = await shortestMovieWatchedApi(moviestryToken);
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
      getUserWatched();
    }
  }, [user]);

  useEffect(() => {
    const timer = setInterval(reloadWebsite, 30000);
    // clearing interval
    return () => clearInterval(timer);
  });

  return (
    <GlobalContext.Provider
      value={{
        loading,
        error,
        signUp,
        login,
        logout,
        moviestryToken,
        getMovieDetails,
        searchMovies,
        user,
        addToWatchlist,
        getUserWatchlist,
        watchlistMedia,
        removeFromWatchlist,
        addToWatched,
        removeFromWatched,
        getUserWatched,
        watchedMedia,
        getMovies,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
