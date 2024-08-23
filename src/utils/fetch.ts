import api from "../services/config/api.ts";


export const fetchData = async <T>(url: string): Promise<T> => {
    try {
        const { data } = await api.get<T>(url);
        return data;
    } catch (error) {
        console.error(`Erro ao buscar dados da URL ${url}:`, error);
        throw error;
    }
};