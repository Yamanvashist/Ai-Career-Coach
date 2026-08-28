import axios from "axios";
import api from "../api";

interface User {
  name?: string;
  email: string;
  password: string;
}

export const signUp = async (userData: User) => {
  const { data } = await api.post("/user/sign-up", userData);
  return data.user;
};

export const signIn = async (userData: User) => {
  const { data } = await api.post("/user/sign-in", userData);
  return data.user;
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
  await api.post("/user/sign-out");
};

export const accountDelete = async () => {
  const { data } = await api.delete("/user/delete");
  return data;
};

export const forgotPassword = async (email: string) => {
  const { data } = await api.post("/user/forgotPassword", {
    email,
  });

  return data;
};

export const resetPassword = async (token: string, password: string) => {
  const { data } = await api.post("/user/resetPassword", {
    token,
    password,
  });

  return data;
};

