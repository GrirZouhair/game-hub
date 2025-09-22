import useGames from "@/hooks/useGames";
import { SimpleGrid, Text, Box } from "@chakra-ui/react";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, err } = useGames();

  if (err) return <Text color="red.400">{err}</Text>;

  return (
    <Box padding={5}>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6} 
      >
        {games.map((val) => (
          <GameCard key={val.id} game={val} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default GameGrid;
