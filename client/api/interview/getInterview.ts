import api from "../api";

const getInterview = async (interviewId: string) => {
  const { data } = await api.get(`/interview/${interviewId}`);
  return data;
};

export default getInterview;
