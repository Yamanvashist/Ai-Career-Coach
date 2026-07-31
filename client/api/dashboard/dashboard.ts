import api from "../api";

export const getDashboard = async () => {
  try {
    const { data } = await api.get("/dashboard");
    return data;
  } catch (error) {
    throw error;
  }
};
