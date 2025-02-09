import { IResponseInvites } from "@/interfaces/IResponseInvites";
import { api } from "../configurations/Axios";

const GetByName = async (name: string) => {
    try {
        const result = await api.post(`/SearchInvite`, { "name": name });
        const response = await result.data as IResponseInvites;
        return response;
    }
    catch (error: any) {
        throw new Error(error.response.data);
    }
}

export {
    GetByName
}