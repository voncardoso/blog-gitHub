import {useProfile, useReposIssues} from "./service.ts";

const HomeServices =() => {
    return {
        useProfile,
        useReposIssues,
    }
}

export default HomeServices;