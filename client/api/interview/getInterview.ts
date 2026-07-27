import api from "../api"

const getInterview = async (interviewId: number) => {
    try {
        const { data } = await api.get(`/interview/${interviewId}`)
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
        throw error
    }
}

export default getInterview