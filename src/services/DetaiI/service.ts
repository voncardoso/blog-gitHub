import {useQuery} from "@tanstack/react-query";
import {fetchData} from "../../utils/fetch.ts";
import {Issue} from "../home/@types.ts";
import {useEffect} from "react";

export const useDetailsIssues = (id?: string) => {
    const { data, isLoading, refetch } = useQuery({
        queryKey: ['detail'],
        queryFn: () => fetchData<Issue>(`/repos/voncardoso/blog-github/issues/${id}`),
    }, );


    useEffect(() => {
        refetch()
    }, [id]);



    return {
        data,
        loading: isLoading
    }
}