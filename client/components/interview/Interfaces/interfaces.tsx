import { LucideIcon } from "lucide-react";

export interface InterviewData {
    title: string;
    description: string[];
    icon: LucideIcon
    duration: string;
    color: string
}

export interface SelectedInterviewProps {
    selectedInterview: InterviewData | null;
    setSelectedInterview: React.Dispatch<React.SetStateAction<InterviewData | null>>;
    selectedDifficulty: "Easy" | "Medium" | "Hard";
    setSelectedDifficulty: React.Dispatch<React.SetStateAction<"Easy" | "Medium" | "Hard">>;
    selectedExperience: "Fresher" | "1-2 Years" | "Senior";
    setSelectedExperience: React.Dispatch<React.SetStateAction<"Fresher" | "1-2 Years" | "Senior">>;
    selectedTotalQuestions: 5 | 10 | 15;
    setSelectedTotalQuestions: React.Dispatch<React.SetStateAction<5 | 10 | 15>>;
    selectedInput: "Text" | "Voice";
    setSelectedInput: React.Dispatch<React.SetStateAction<"Text" | "Voice">>;
}
