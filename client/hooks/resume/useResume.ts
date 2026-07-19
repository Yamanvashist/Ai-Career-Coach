import { useQueryClient } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { resumeAnalyze } from '@/api/resume/resume';

const useResume = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: resumeAnalyze,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["user"] });
        },
        onError: (err) => {
            console.log(err)
            return err
        }
    });

}

export default useResume