import useGames from "@/hooks/useGames";
import { SimpleGrid, Text, Box } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";


const GameGrid = () => {
  const { data, err , isLoading} = useGames();
  const skeletons = [1,2,3,4,5,6,];

  if (err) return <Text color="red.400">{err}</Text>;

  return (
    <Box padding={5}>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        gap={6} 
      >
        {isLoading && skeletons.map(sk => <GameCardSkeleton key={sk}/>)}
        {data.map((val) => (
          <GameCard key={val.id} game={val} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default GameGrid;
