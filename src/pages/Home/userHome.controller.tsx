import HomeServices from "../../services/home";

export default function useHome() {
    const {useProfile} = HomeServices()
    const {profile} = useProfile();

    return{
        profile
    }
}