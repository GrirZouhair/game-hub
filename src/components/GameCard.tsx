import { type Games } from '@/hooks/useGames'
import {Image ,Heading, CardBody, Card } from "@chakra-ui/react"

interface Props {
  game: Games
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={20} overflow={"hidden"}>
      <Image src={game.background_image} alt={game.name} />
      <CardBody>
        <Heading fontSize={'2xl'}>{game.name}</Heading>
      </CardBody>
    </Card.Root>
    
  )
}

export default GameCard
