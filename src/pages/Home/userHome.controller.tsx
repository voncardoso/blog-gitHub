import HomeServices from "../../services/home";
import {useState} from "react";
import {useNavigate} from "react-router-dom";


export default function useHome() {
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    const {useProfile, useReposIssues} = HomeServices()
    const {profile} = useProfile();
    const {issues, totalIssues} = useReposIssues(search);

    const goToNextPage  = (id: number) => {
        navigate(`/detail/${id}`);
    }

    return{
        profile,
        issues,
        totalIssues,
        search,
        setSearch,
        goToNextPage
    }
}