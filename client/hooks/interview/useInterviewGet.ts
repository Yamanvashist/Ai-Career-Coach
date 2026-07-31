import { useQuery } from "@tanstack/react-query";
import getInterview from "@/api/interview/getInterview";

const useInterviewGet = (interviewId: string) => {
    return useQuery({
        queryKey: ["interview", interviewId],
        queryFn: () => getInterview(interviewId),
        enabled: !!interviewId
    })
}

export default useInterviewGet;