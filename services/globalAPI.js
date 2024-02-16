import { API_URL } from "@/utils/config";
import axios from "axios";

export const signUpAPI = async (name, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/api/v1/register`, {
      name,
      email,
      password,
    });
    console.log(response);

    return response;
  } catch (error) {
    console.error(error);
  }
};

export const loginAPI = async (name, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/api/v1/auth/login`, {
      email,
      password,
    });

    return response;
  } catch (error) {
    console.error(error);
  }
};
