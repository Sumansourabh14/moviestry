"use client";
import { createContext, useState } from "react";
import { loginAPI, signUpAPI } from "./globalAPI";
import { useCookies } from "react-cookie";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(null);
  const [cookie, setCookie, removeCookie] = useCookies();
  const [token, setToken] = useState(cookie.token);

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

      return response;
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  const logout = async () => {
    setToken(null);
    removeCookie("token");
  };

  return (
    <GlobalContext.Provider value={{ loading, signUp, login, token, logout }}>
      {children}
    </GlobalContext.Provider>
  );
};
