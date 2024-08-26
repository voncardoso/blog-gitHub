import { useQuery } from '@tanstack/react-query';
import {fetchData} from "../../utils/fetch.ts";
import {repository, UserProfile} from "./@types.ts";
import {useEffect} from "react";


export const useProfile = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: () => fetchData<UserProfile>('/users/voncardoso'),
    });

    return {
        profile: data,
        loading: isLoading
    }
}

export const useReposIssues = (search: string) => {
    const { data, isLoading, refetch } = useQuery({
        queryKey: ['issues'],
        queryFn: () => fetchData<repository>('/search/issues', search),
    }, );


    useEffect(() => {
            refetch()
    }, [search]);

    return {
        issues: data?.items,
        totalIssues: data?.total_count,
        loading: isLoading
    }
}
