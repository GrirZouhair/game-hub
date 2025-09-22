import { Badge } from "@chakra-ui/react";

interface Props {
  metacritic: number;
}

const CriticScore = ({ metacritic }: Props) => {
  const colorScheme =
    metacritic > 75 ? "green" : metacritic > 60 ? "yellow" : "red";

  return (
    <Badge
      color={colorScheme}
      fontSize="18px"
      paddingX={2}
      borderRadius="md"
    >
      {metacritic}
    </Badge>
  );
};

export default CriticScore;
