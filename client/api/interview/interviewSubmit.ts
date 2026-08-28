import api from "../api";

interface Answer {
  questionId: string;
  answer: string;
}

interface InterviewSubmitProps {
  interviewId: string;
  answers: Answer[];
}

const interviewSubmit = async ({
  interviewId,
  answers,
}: InterviewSubmitProps) => {
  const { data } = await api.post(`/interview/${interviewId}/submit`, {
    answers,
  });

  return data;
};

export default interviewSubmit;
