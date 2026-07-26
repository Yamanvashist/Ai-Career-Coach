import axios from "axios"
import { Difficulty, TotalQuestions, Experience, InputMode } from "@/components/interview/Interfaces/interfaces"

interface InterviewStartProps {
    category: string;
    topics: string[]
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
    try {
        const { data } = await axios.post(
            "http://localhost:4000/api/interview/start",
            {
                category,
                topics,
                difficulty,
                totalQuestions,
                experience,
                inputMode,
            },
            { withCredentials: true }
        );

        return data;
    } catch (error) {
        throw error;
    }
};
export default interviewStart