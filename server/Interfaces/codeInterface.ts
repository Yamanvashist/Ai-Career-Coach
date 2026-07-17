export enum Complexity {
    LOW = "LOW",
    MEDIUM = "MEDIUM",
    HIGH = "HIGH",
}

export interface CodeAnalysisResponse {
    title: string;
    language: string;
    code: string;

    summary: string;
    overallScore: number;

    correctness: number;
    performance: number;
    readability: number;
    maintainability: number;
    bestPractices: number;

    linesOfCode: number;
    complexity: Complexity;

    issues: string[];
    improvements: string[];

    optimizedCode: string;

    userId: number;
}

export interface userInput {
    code : string;
    language : string;
}