export interface PromptProps {
  category: string;
  topics: string[];
  difficulty: "EASY" | "MEDIUM" | "HARD";
  experience: "FRESHER" | "ONE_TO_TWO_YEARS" | "SENIOR";
  inputMode: "TEXT" | "VOICE";
  totalQuestions: number;
}

export interface InterviewQuestion {
  id: number;
  topic: string;
  speech: string;
  question: string;
}

export interface SubmittedAnswer {
  questionId: number;
  answer: string;
}
