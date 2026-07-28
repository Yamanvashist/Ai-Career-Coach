import api from "../api";

export const resumeAnalyze = async (formData: FormData) => {
  try {
    const { data } = await api.post(
      "/resume/resumeAnalyze",
      formData,
    );
    return data;
  } catch (err) {
    throw err;
  }
};
