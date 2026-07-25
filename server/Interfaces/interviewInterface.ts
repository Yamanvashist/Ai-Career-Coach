export interface PromptProps {
    category: string;
    topics: string[];
    difficulty: "EASY" | "MEDIUM" | "HARD";
    experience: "Fresher" | "1-2 Years" | "Senior";
    inputMode: "TEXT" | "VOICE"
    totalQuestions: number;
}