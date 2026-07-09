import axios from "axios";

interface User {
  name?: string;
  email: string;
  password: string;
}

export const signUp = async (userData: User) => {
  try {
    const { data } = await axios.post(
      "http://localhost:4000/api/user/sign-up",
      userData,
      {
        withCredentials: true,
      },
    );

    return data.user;
  } catch (error) {
    throw error;
  }
};

export const signIn = async (userData: User) => {
  try {
    const { data } = await axios.post(
      "http://localhost:4000/api/user/sign-in",
      userData,
      { withCredentials: true },
    );
    return data.user;
  } catch (error) {
    throw error;
  }
};
