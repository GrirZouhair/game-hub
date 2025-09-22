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
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        const controller = new AbortController();
        setIsLoading(true);
        apiClient.get<FetchedGameResponse>("/games", {signal: controller.signal})
        .then((res) => {setGames(res.data.results), setIsLoading(false)})
        .catch((err) => {
            if (err instanceof CanceledError) return;    
            setErr(err.message), setIsLoading(false)});
        return () => controller.abort();
    }, []);
    return {games, err, isLoading}
}

export default useGames
