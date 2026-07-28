import { LucideIcon } from "lucide-react";

export interface InterviewData {
    title: string;
    description: string[];
    icon: LucideIcon;
    duration: string;
    color: string;
}

export type Difficulty = "EASY" | "MEDIUM" | "HARD";

export type Experience = "FRESHER" | "ONE_TO_TWO_YEARS" | "SENIOR";

export type InputMode = "TEXT" | "VOICE";

export type TotalQuestions = 5 | 10 | 15;

export interface SelectedInterviewProps {
    selectedInterview: InterviewData | null;
    setSelectedInterview: React.Dispatch<
        React.SetStateAction<InterviewData | null>
    >;
}

export const DIFFICULTY_OPTIONS: { label: string; value: Difficulty }[] = [
    { label: "Easy", value: "EASY" },
    { label: "Medium", value: "MEDIUM" },
    { label: "Hard", value: "HARD" }
];

export const EXPERIENCE_OPTIONS: { label: string; value: Experience }[] = [
    { label: "Fresher", value: "FRESHER" },
    { label: "1-2 Years", value: "ONE_TO_TWO_YEARS" },
    { label: "Senior", value: "SENIOR" }
];

export const INPUT_MODE_OPTIONS: { label: string; value: InputMode }[] = [
    { label: "Text Chat", value: "TEXT" },
    { label: "Voice Chat", value: "VOICE" }
];