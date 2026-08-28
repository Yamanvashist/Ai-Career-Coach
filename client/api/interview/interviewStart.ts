import api from "../api";
import {
  Difficulty,
  TotalQuestions,
  Experience,
  InputMode,
} from "@/components/interview/Interfaces/interfaces";

interface InterviewStartProps {
  category: string;
  topics: string[];
  difficulty: Difficulty;
  totalQuestions: TotalQuestions;
  experience: Experience;
  inputMode: InputMode;
}

const interviewStart = async ({
  category,
  topics,
  difficulty,
  totalQuestions,
  experience,
  inputMode,
}: InterviewStartProps) => {
  const { data } = await api.post("/interview/start", {
    category,
    topics,
    difficulty,
    totalQuestions,
    experience,
    inputMode,
  });
  console.log(data)
  return data;
};
export default interviewStart;
