import DetailServices from "../../services/DetaiI";
import {useParams} from "react-router-dom";

export default function useDetail() {
    const {id} = useParams();
    const {useDetailsIssues} = DetailServices()
    const {data, loading} = useDetailsIssues(id);

    return {
        data,
        loading
    }
}