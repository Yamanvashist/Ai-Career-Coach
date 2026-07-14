import { GoogleGenAI } from "@google/genai"
import "dotenv/config"

const gemini = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY!
})

export const analyze = async (prompt: string) => {
    const response = await gemini.models.generateContent({
        model: "gemini-3.1-flash-lite",
        contents: prompt
    })
    return response.text
}
