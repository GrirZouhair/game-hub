import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react"



interface FetchResponse<T> {
    count: number,
    results: T[]
}

const useData = <T>(endpoint: string) => {
    const [data, setData] = useState<T[]>([]);
    const [err, setErr] = useState('');

    useEffect(() => {
        const controller = new AbortController();
        apiClient.get<FetchResponse<T>>(endpoint, {signal: controller.signal})
        .then((res) => {setData(res.data.results)})
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setErr(err.message);
            return() => controller.abort();
        })
    });
    return {data, err}
}

export default useData
