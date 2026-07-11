export interface ResumeScores {
  skills: number;
  projects: number;
  experience: number;
  formatting: number;
}

export interface Resume {
  atsScore: number;
  summary: string;
  scores: ResumeScores;
  strengths: string[];
  improvements: string[];
  conclusion: string;
}