import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_REACT_APP_API_BASE_URL;
console.log("API_BASE_URL", API_BASE_URL);

const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
});

export async function getActions() {
    const response = await api.get(`/event`);
    if (response.status !== 200) {
        throw new Error("Failed to fetch data");
    }
    return response.data;
}
