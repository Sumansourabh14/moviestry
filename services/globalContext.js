"use client";
import { createContext, useEffect } from "react";
import { nowPlayingMoviesApi } from "./globalAPIs";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const getNowPlaying = async () => {
    const res = await nowPlayingMoviesApi();
  };

  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
};
