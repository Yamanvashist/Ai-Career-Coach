import api from "../api";

interface Answer {
  questionId: number;
  answer: string;
}

interface InterviewSubmitProps {
  interviewId: number;
  answers: Answer[];
}

const interviewSubmit = async ({
  interviewId,
  answers,
}: InterviewSubmitProps) => {
  try {
    const { data } = await api.post(`/interview/${interviewId}/submit`, {
      answers,
    });

    return data;
  } catch (error) {
    console.error("Error submitting interview:", error);
    throw error;
  }
};

export default interviewSubmit;
