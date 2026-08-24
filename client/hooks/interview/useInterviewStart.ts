import { useMutation } from "@tanstack/react-query";
import interviewStart from "@/api/interview/interviewStart";
import { useQueryClient } from "@tanstack/react-query";

export const useInterviewStart = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: interviewStart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      queryClient.invalidateQueries({ queryKey: ["dashboard"] });
    },
  });
};
