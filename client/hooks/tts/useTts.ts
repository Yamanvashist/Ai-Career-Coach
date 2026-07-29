import { useMutation } from "@tanstack/react-query";
import { generateSpeech } from "@/api/tts/tts";

const useTTS = () => {
    return useMutation({
        mutationFn: generateSpeech,
    });
};

export default useTTS;