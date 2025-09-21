import useGames from '@/hooks/useGames';
import { Text } from '@chakra-ui/react';


const GameGrid = () => {
    const {games, err} =  useGames();
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
