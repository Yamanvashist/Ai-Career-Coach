import api from "../api";


interface Answer {
    questionId: number;
    answer: string;
}

interface interviewSubmitProps {
    interviewId: number;
    answers: Answer[]
}

const interviewSubmit = async ({ interviewId, answers
}: interviewSubmitProps) => {
    try {
        const { data } = await api.post(
            "/interview/submit",
            {
                interviewId,
                answers
            },
        );

        return data;
    } catch (error) {
        throw error;
    }
};
export default interviewSubmit