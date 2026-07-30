import api from "../api";

const getInterviewResult = async (interviewId: string) => {
  try {
    const { data } = await api.get(`/interview/${interviewId}/result`);
    return data;
  } catch (error) {
    throw error;
  }
};


export default getInterviewResult;