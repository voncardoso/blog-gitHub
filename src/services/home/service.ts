import { useQuery } from '@tanstack/react-query';
import {fetchData} from "../../utils/fetch.ts";
import {UserProfile} from "./@types.ts";

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