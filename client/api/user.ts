import axios from "axios";

export const checkAuth = async () => {
  try {
    const { data } = await axios.get(
      "http://localhost:4000/api/user/checkAuth",
      {withCredentials : true}
    );
    return data.user;
  } catch (error) {
    throw error;
  }
};
