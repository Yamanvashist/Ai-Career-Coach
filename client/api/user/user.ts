import axios from "axios";

export const updatePassword = async ({
  password,
  newPassword,
}: {
  password: string;
  newPassword: string;
}) => {
  try {
    const {data} = await axios.patch("http://localhost:4000/api/user/password", {
      password,
      newPassword,
    }, { withCredentials: true });

    return data;
  } catch (error) {
    throw error
  }
};