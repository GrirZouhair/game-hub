import apiClient from '@/services/api-client';
import { Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react'


interface Games {
    id: number,
    name: string
}

interface FetchedGameResponse {
    count: number,
    results: Games[],
}
const GameGrid = () => {
    const [games, setGames] = useState<Games[]>([]);
    const [err, setErr] = useState('');

    useEffect(() => {
        apiClient.get<FetchedGameResponse>("/games")
        .then((res) => setGames(res.data.results))
        .catch((err) => setErr(err.message));
    })
  return (
    <div>
        {err && <Text>{err}</Text>}
    <ul>
        {games.map((val, key) => (
            <li key={key}>{val.name}</li>
        ))}
    </ul>
    </div>
  )
}

export default GameGrid
