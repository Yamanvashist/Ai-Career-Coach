import api from "../api";

interface Form {
    targetRole: string;
    experience: string;
    skills: string[];
    about: string
}

export const upsertProfile = async (formData: Form) => {
    try {
        const { data } = await api.patch("/profile",
            formData,
        )
        return data
    } catch (err) {
        throw err
    }
}

export const getProfile = async () => {
    try {
        const { data } = await api.get("/profile")
        return data
    } catch (err) {
        throw err
    }
}