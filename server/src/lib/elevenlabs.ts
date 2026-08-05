import { ElevenLabsClient } from "@elevenlabs/elevenlabs-js"

const client = new ElevenLabsClient({
    apiKey: process.env.ELEVENLABS_API_KEY!
})

const VOICE_ID = process.env.ELEVENLABS_VOICE_ID || "hpp4J3VqNfWAUOO0d1Us";

export async function textToSpeech(text: string) {
    const audio = await client.textToSpeech.convert(VOICE_ID, {
        text,
        modelId: "eleven_multilingual_v2",
        outputFormat: "mp3_44100_128",
    })

    return audio
}