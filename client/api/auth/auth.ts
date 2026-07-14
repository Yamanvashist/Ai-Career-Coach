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

export const checkAuth = async () => {
  try {
    const { data } = await axios.get(
      "http://localhost:4000/api/user/checkAuth",
      { withCredentials: true }
    );
    return data.user;
  } catch (error) {
    throw error;
  }
};


export const logOut = async () => {
  try {
    await axios.post("http://localhost:4000/api/user/sign-out",
      undefined,
      { withCredentials: true },
    )
  } catch (error) {
    {
      throw error
    }
  }
}

