import { API_URL } from "@/utils/config";
import axios from "axios";

export const signUpAPI = async (name, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/api/v1/register`, {
      name,
      email,
      password,
    });

    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const loginAPI = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/api/v1/auth/login`, {
      email,
      password,
    });

    return response;
  } catch (error) {
    console.error(error);
    return error.response;
  }
};

export const getSelfAPI = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/api/v1/user/self`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (error) {
    console.error(error);
    return error.response;
  }
};
