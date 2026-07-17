import axios from 'axios'

interface CodeInput {
    code: string;
    language: string;
}

export const analyzeCode = async ({ code, language }: CodeInput) => {
    try {
        const { data } = await axios.post("http://localhost:4000/api/codeAnalysis",
            {
                code,
                language,
            }, {
            withCredentials: true
        }
        )
        return data
    } catch (error) {
        throw error
    }
}

