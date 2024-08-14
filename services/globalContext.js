"use client";
import { createContext, useEffect, useState } from "react";
import {
  movieDetailsApi,
  nowPlayingMoviesApi,
  searchMoviesApi,
} from "./globalAPIs";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [error, setError] = useState({ error: false, status: "" });
  const [loading, setLoading] = useState(true);

  const getNowPlaying = async () => {
    try {
      const res = await nowPlayingMoviesApi();
    } catch (error) {
      console.log(error);
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
      console.log(error);
      setError({
        error: error.response.data.status_message,
        status: error.response.status,
      });
      setLoading(false);
    }
  };

  const searchMovies = async (query) => {
    try {
      setLoading(true);
      const res = await searchMoviesApi(query);
      setLoading(false);
      return res;
    } catch (error) {
      console.log(error);
      setError({
        error: error.response.data.status_message,
        status: error.response.status,
      });
      setLoading(false);
    }
  };

  return (
    <GlobalContext.Provider
      value={{ loading, getNowPlaying, getMovieDetails, searchMovies }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
