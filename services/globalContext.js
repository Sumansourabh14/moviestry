"use client";
import { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { getSelfAPI, loginAPI, signUpAPI } from "./globalAPI";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(null);
  const [cookie, setCookie, removeCookie] = useCookies();
  const [token, setToken] = useState(cookie.token);
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(cookie.isLoggedIn);

  const signUp = async (name, email, password) => {
    try {
      const response = await signUpAPI(name, email, password);

      return response;
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  const login = async (email, password) => {
    try {
      const response = await loginAPI(email, password);

      setCookie("token", response.data.token, { secure: true });
      setToken(response.data.token);

      if (response?.status === 200) {
        setIsLoggedIn(true);
      }

      return response;
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  const getSelf = async () => {
    try {
      const response = await getSelfAPI(token);
      console.log(response);

      if (response?.data?.user) {
        setUser(response.data.user);
        setCookie("isLoggedIn", true);
        setIsLoggedIn(true);
      } else {
        setCookie("isLoggedIn", false);
        setIsLoggedIn(false);
      }

      return response;
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  const logout = async () => {
    setToken(null);
    removeCookie("token");
    setUser({});
    setCookie("isLoggedIn", false);
    setIsLoggedIn(false);
  };

  useEffect(() => {
    getSelf();
  }, [isLoggedIn]);

  return (
    <GlobalContext.Provider
      value={{ loading, signUp, login, token, logout, user, isLoggedIn }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
