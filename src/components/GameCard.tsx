import { type Games } from "@/hooks/useGames";
import {
  Image,
  Heading,
  CardBody,
  Card,
  VStack,
} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Games;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root
      borderRadius="xl"
      overflow="hidden"
      boxShadow="md"
      _hover={{ transform: "scale(1.02)", boxShadow: "xl" }}
      transition="all 0.2s ease-in-out"
    >
      <Image
        src={game.background_image}
        alt={game.name}
        objectFit="cover"
        height="200px"
        width="100%"
      />
      <CardBody>
        <VStack align="start" spacing={2}>
          <Heading fontSize="xl" noOfLines={1}>
            {game.name}
          </Heading>
          <PlatformIconList platforms={game.parent_platforms} />
        </VStack>
      </CardBody>
    </Card.Root>
  );
};

export default GameCard;
