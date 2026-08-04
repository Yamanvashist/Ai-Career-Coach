import api from "../api";

const getHistory = async (page : number) => {
  try {
    const { data } = await api.get("/history", {
      params: { page: page, limit: 10 },
    });
    console.log(data)
    return data;
  } catch (err) {
    throw err;
  }
};

export default getHistory;
