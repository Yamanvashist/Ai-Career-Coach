import api from "../api";

const getHistory = async (page: number) => {
  const { data } = await api.get("/history", {
    params: { page: page, limit: 10 },
  });
  return data;
};

export default getHistory;
