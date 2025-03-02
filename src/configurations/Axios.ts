import axios, { AxiosError } from "axios";

export const api = Axios();

function Axios() {
    const token = process.env.REACT_APP_TOKEN;

    const api = axios.create({
        baseURL: process.env.REACT_APP_URL,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    api.interceptors.request.use(request => {
        request.headers.Authorization = `Basic ${token}`

        return request;
    }, (error: AxiosError) => {
        return Promise.reject(error);
    });

    api.interceptors.response.use(response => {
        return response;
    }, (error: AxiosError) => {
        return Promise.reject(error.response);
    });

    return api;
}

export default Axios;