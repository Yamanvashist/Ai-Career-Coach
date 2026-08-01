import api from "../api";

const getHistory = async () => {
  try {
    const { data } = await api.get("/history");
    return data.history;
  } catch (err) {
    throw err;
  }
};


export default getHistory