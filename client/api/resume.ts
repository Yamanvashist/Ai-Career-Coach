import axios from "axios";

export const resumeAnalyze = async (formData: FormData) => {
  try {
    const { data } = await axios.post(
      "http://localhost:4000/api/resume/resumeAnalyze",
      formData,
      { withCredentials: true },
    );
    return data.resume;
  } catch (err) {
    throw err;
  }
};
