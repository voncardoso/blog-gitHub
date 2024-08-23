import HomeServices from "../../services/home";

export default function useHome() {
    const {useProfile, useReposIssues} = HomeServices()
    const {profile} = useProfile();
    const {issues} = useReposIssues();

    return{
        profile,
        issues
    }
}