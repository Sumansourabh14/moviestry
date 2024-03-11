import axios from "axios";
import { API_REQUESTS } from "./tmdbRequests";

export const getPopularMoviesAPI = async () => {
  try {
    const response = await axios.get(API_REQUESTS.requestPopular);
    console.log(response);

    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
};
