import { useMutation } from "@tanstack/react-query";
import interviewSubmit from "@/api/interview/interviewSubmit";

const useInterviewSubmit = () => {
    return useMutation({
        mutationFn: interviewSubmit
    })
}

export default useInterviewSubmit;