import axios from "axios";

//Reloader Function
async function reloadWebsite() {
  try {
    const response = await axios.get(process.env.NEXT_PUBLIC_BACKEND_API_URL);
    // console.log(
    //   `Reloaded at ${new Date().toISOString()}: Status Code ${response.status}`
    // );
  } catch (error) {
    // console.error(
    //   `Error reloading at ${new Date().toISOString()}:`,
    //   error.message
    // );
  }
}

export default reloadWebsite;
