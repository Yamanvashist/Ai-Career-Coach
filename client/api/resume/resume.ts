import api from "../api";

export const resumeAnalyze = async (formData: FormData) => {
  const { data } = await api.post("/resume/resumeAnalyze", formData);
  return data;
};
