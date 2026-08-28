import api from "../api";

export const updatePassword = async ({
  password,
  newPassword,
}: {
  password: string;
  newPassword: string;
}) => {
  const { data } = await api.patch("/user/password", {
    password,
    newPassword,
  });

  return data;
};
