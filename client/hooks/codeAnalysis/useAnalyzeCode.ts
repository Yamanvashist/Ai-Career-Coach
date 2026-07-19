import { useMutation } from "@tanstack/react-query"
import { analyzeCode } from "@/api/codeAnalysis/codeAnalysis"
import { useQueryClient } from "@tanstack/react-query"

export const useAnalyzeCode = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: analyzeCode,
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ["user"] })
            return data
        },
        onError: (err) => {
            console.log(err)
            return err
        }
    })
}
