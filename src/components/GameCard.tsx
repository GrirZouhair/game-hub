import { type Games } from "@/hooks/useGames";
import {
  Image,
  Heading,
  CardBody,
  Card,
  VStack,
  HStack,
} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

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
          <Heading fontSize="xl" >
            {game.name}
          </Heading>
          <HStack justifyContent={'space-between'}>
            <PlatformIconList platforms={game.parent_platforms} />
            <CriticScore metacritic={game.metacritic}/>
          </HStack>
      </CardBody>
    </Card.Root>
  );
};

export default GameCard;
