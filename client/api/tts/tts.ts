import api from "../api";

export const generateSpeech = async (text: string): Promise<Blob> => {
    const { data } = await api.post(
        "/tts",
        { text },
        {
            responseType: "blob",
        }
    );

    return data;
};