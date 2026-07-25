import { LucideIcon } from "lucide-react";

export interface InterviewData {
    title: string;
    description: string[];
    icon: LucideIcon
    duration: string;
    color: string
}

export type Difficulty = "Easy" | "Medium" | "Hard";

export type Experience = "Fresher" | "1-2 Years" | "Senior";

export type InputMode = "Text" | "Voice";

export type TotalQuestions = 5 | 10 | 15;

export interface SelectedInterviewProps {
    selectedInterview: InterviewData | null;
    setSelectedInterview: React.Dispatch<
        React.SetStateAction<InterviewData | null>
    >;
}