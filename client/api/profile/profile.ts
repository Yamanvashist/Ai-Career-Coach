import api from "../api";

interface Form {
  targetRole: string;
  experience: string;
  skills: string[];
  about: string;
}

export const upsertProfile = async (formData: Form) => {
  const { data } = await api.patch("/profile", formData);
  return data;
};

export const getProfile = async () => {
  const { data } = await api.get("/profile");
  return data;
};
