import { useMutation } from "@tanstack/react-query";
import interviewStart from "@/api/interview/interviewStart";

export const useInterviewStart = () => {
    return useMutation({
        mutationFn: interviewStart,
    });
};