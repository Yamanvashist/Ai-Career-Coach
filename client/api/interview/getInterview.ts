import api from "../api"

const getInterview = async (interviewId: number) => {
    try {
        const { data } = await api.get(`/interview/${interviewId}`)
        return data

    } catch (error) {
        throw error
    }
}

export default getInterview