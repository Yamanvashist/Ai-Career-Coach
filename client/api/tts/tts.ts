import api from "../api";

export const generateSpeech = async (text: string): Promise<Blob> => {
    const { data } = await api.post(
        "/tts",
        { text },
        {
            responseType: "blob",
        }
    );
    console.log(data)
    return data;
};