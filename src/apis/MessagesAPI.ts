import { api } from "../configurations/Axios";

const SendMessage = async (name: string, message: string) => {
    try {
        const result = await api.post(`/SendMessage`, { "name": name, "message": message });
        const response = await result.data;
        return response;
    }
    catch (error: any) {
        throw new Error(error.response.data);
    }
}

export {
    SendMessage
}