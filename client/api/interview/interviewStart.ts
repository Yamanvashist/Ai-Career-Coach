import axios from "axios"
import { InterviewData, Difficulty, TotalQuestions, Experience, InputMode } from "@/components/interview/Interfaces/interfaces"

interface InterviewStartProps {
    interview: InterviewData;
    difficulty: Difficulty;
    questions: TotalQuestions;
    experience: Experience;
    inputMode: InputMode;
}

const interviewStart = async ({
    interview,
    difficulty,
    questions,
    experience,
    inputMode,
}: InterviewStartProps) => {
    try {
        const { data } = await axios.post(
            "http://localhost:4000/api/interview/start",
            {
                interview,
                difficulty,
                totalQuestions: questions,
                experience,
                inputMode,
            }
        );

        return data;
    } catch (error) {
        throw error;
    }
};
export default interviewStart