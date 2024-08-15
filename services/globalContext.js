"use client";
import { createContext, useState } from "react";
import {
  movieDetailsApi,
  nowPlayingMoviesApi,
  searchMoviesApi,
  signUpApi,
} from "./globalAPIs";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [error, setError] = useState({ error: false, status: "", message: "" });
  const [loading, setLoading] = useState(true);

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
      console.log(error);
      setError({
        error: true,
        status: error.response.status,
        message: error.response.data.message,
      });
      setLoading(false);
    }
  };

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
      value={{
        loading,
        error,
        signUp,
        getNowPlaying,
        getMovieDetails,
        searchMovies,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
