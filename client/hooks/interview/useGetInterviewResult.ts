import getInterviewResult from "../../api/interview/getInterviewResult";
import { useQuery } from "@tanstack/react-query";

const useGetInterviewResult = (interviewId: string | number) => {
  const id = String(interviewId);

  return useQuery({
    queryKey: ["interviewResult", id],
    queryFn: () => getInterviewResult(id),
    enabled: !!id,
  });
};

export default useGetInterviewResult;
