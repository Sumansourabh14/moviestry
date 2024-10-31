//Reloader Function
async function reloadWebsite() {
  try {
    await axios.get(process.env.NEXT_PUBLIC_BACKEND_API_URL);
  } catch (error) {}
}

export default reloadWebsite;
