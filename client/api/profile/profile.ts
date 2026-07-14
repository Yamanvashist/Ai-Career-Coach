import axios from "axios"

interface Form {
    targetRole: string;
    experience: string;
    skills: string[];
    about: string
}

export const upsertProfile = async (formData: Form) => {
    try {
        const { data } = await axios.patch("http://localhost:4000/api/profile",
            formData, {
            withCredentials: true
        }
        )
        console.log(data)
        return data
    } catch (err) {
        throw err
    }
}

export const getProfile = async () => {
    try {
        const { data } = await axios.get("http://localhost:4000/api/profile", { withCredentials: true })
        return data
    } catch (err) {
        throw err
    }
}