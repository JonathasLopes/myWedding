import { IMessageResponse } from "@/interfaces/IResponseMessages";
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

const GetAllMessages = async () => {
    try {
        const result = await api.get(`GetAllMessages`);
        const response = await result.data as IMessageResponse[];
        return response;
    }
    catch(error: any) {
        throw new Error(error.response.data);
    }
}

export {
    SendMessage,
    GetAllMessages
}