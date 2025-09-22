import{useState, useEffect} from"react"
import apiClient from "@/services/api-client"
import { CanceledError } from "axios";

export interface Parent_platform {
    parent_platform: Parent_platform
}

export interface Games {
    id: number,
    name: string,
    background_image: string,
    parent_platforms: Parent_platform[],
    metacritic: number
}

interface FetchedGameResponse {
    count: number,
    results: Games[],
}

const useGames = () => {
    const [games, setGames] = useState<Games[]>([]);
    const [err, setErr] = useState('');
    
    useEffect(() => {
        const controller = new AbortController();

        apiClient.get<FetchedGameResponse>("/games", {signal: controller.signal})
        .then((res) => setGames(res.data.results))
        .catch((err) => {
            if (err instanceof CanceledError) return;    
            setErr(err.message)});
        return () => controller.abort();
    }, []);
    return {games, err}
}

export default useGames
