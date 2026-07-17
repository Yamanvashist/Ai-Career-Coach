import { useMutation } from "@tanstack/react-query"
import { analyzeCode } from "@/api/codeAnalysis/codeAnalysis"

export const useAnalyzeCode = () => {
    return useMutation({
        mutationFn: analyzeCode,
        onSuccess: (data) => {
            return data
        },
        onError: (err) => {
            console.log(err)
            return err
        }
    })
}
