import { useQuery } from '@tanstack/react-query';
import {fetchData} from "../../utils/fetch.ts";
import {Issue, UserProfile} from "./@types.ts";

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

export const useReposIssues = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['issues'],
        queryFn: () => fetchData<Issue[]>('repos/voncardoso/blog-gitHub/issues'),
    });

    return {
        issues: data,
        loading: isLoading
    }
}