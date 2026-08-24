import { useQueryClient } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { resumeAnalyze } from '@/api/resume/resume';

const useResume = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: resumeAnalyze,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["user"] });
            queryClient.invalidateQueries({ queryKey: ["dashboard"] });
        },
        onError: (err) => {
            console.log("failed to analyze reusme", err)
        }
    });

}

export default useResume