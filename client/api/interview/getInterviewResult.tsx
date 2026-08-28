import api from "../api";

const getInterviewResult = async (interviewId: string) => {
  const { data } = await api.get(`/interview/${interviewId}/result`);
  return data;
};

export default getInterviewResult;
