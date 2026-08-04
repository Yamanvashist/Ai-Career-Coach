import axios from "axios";
import api from "../api";

interface User {
  name?: string;
  email: string;
  password: string;
}

export const signUp = async (userData: User) => {
  try {
    const { data } = await api.post("/user/sign-up", userData);

    return data.user;
  } catch (error) {
    throw error;
  }
};

export const signIn = async (userData: User) => {
  try {
    const { data } = await api.post("/user/sign-in", userData);
    return data.user;
  } catch (error) {
    throw error;
  }
};

export const checkAuth = async () => {
  try {
    const { data } = await api.get("/user/checkAuth");
    return data.user ?? null;
  } catch (error) {
    if (
      axios.isAxiosError(error) &&
      (error.response?.status === 401 || error.response?.status === 403)
    ) {
      return null;
    }

    throw error;
  }
};

export const logOut = async () => {
  try {
    await api.post("/user/sign-out", undefined);
  } catch (error) {
    {
      throw error;
    }
  }
};

export const accountDelete = async () => {
  try {
    const {data} = await api.delete("/user/delete");
    return data
  } catch (error) {
    {
      throw error;
    }
  }
};
