import api from "../services/config/api.ts";

export const fetchData = async <T>(url: string, search?: string): Promise<T> => {
    const isValidation = search?.length !== 0 ?  `repo:voncardoso/blog-gitHub ${search}` : "repo:voncardoso/blog-gitHub";
    try {
        const { data } = await api.get<T>(url, {
            params: {
                q: isValidation,
            }
        });
        return data;
    } catch (error) {
        console.error(`Erro ao buscar dados da URL ${url}:`, error);
        throw error;
    }
};