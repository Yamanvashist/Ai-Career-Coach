import api from "../api";

interface CodeInput {
    code: string;
    language: string;
}

export const analyzeCode = async ({ code, language }: CodeInput) => {
    try {
        const { data } = await api.post("/codeAnalysis",
            {
                code,
                language,
            },
        )
        return data
    } catch (error) {
        throw error
    }
}

