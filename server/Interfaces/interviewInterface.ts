export interface PromptProps {
    category: string;
    topics: string[];
    difficulty: "EASY" | "MEDIUM" | "HARD";
    experience: "FRESHER" | "ONE_TO_TWO_YEARS" | "SENIOR";
    inputMode: "TEXT" | "VOICE"
    totalQuestions: number;
}