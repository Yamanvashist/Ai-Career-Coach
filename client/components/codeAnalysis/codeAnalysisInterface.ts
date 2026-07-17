export interface CodeAnalysis {
    id: number;
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
    complexity: "LOW" | "MEDIUM" | "HIGH";

    issues: string[];
    improvements: string[];

    optimizedCode: string;

    analysisDuration: number;

    createdAt: string;
    updatedAt: string;

    userId: number;
}