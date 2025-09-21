import useGames from '@/hooks/useGames';
import { SimpleGrid, Text } from '@chakra-ui/react';
import GameCard from './GameCard';


const GameGrid = () => {
    const {games, err} =  useGames();
  return (
    <div>
      {err && <Text>{err}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 , xl: 4}} padding={"10px"}>
        {games.map((val) => (
          <GameCard key={val.id} game={val} />
        ))}
      </SimpleGrid>
    </div>
  )
}

export default GameGrid
// 