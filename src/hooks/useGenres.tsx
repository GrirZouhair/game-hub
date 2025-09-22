import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react"

export interface Genres {
    id: number,
    name: string
}

interface FetchGenresResponse {
    count: number,
    results: Genres[]
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genres[]>([]);
    const [err, setErr] = useState('');

    useEffect(() => {
        const controller = new AbortController();
        apiClient.get<FetchGenresResponse>("/genres", {signal: controller.signal})
        .then((res) => {setGenres(res.data.results)})
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setErr(err.message);
            return() => controller.abort();
        })
    });
    return {genres, err}
}

export default useGenres
