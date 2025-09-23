import useGenres from "@/hooks/useGenres";
import { HStack, List, Text , Image } from "@chakra-ui/react";

const GenreGrid = () => {
    const {data} = useGenres();
    return (
    <List.Root>
      {data.map((val) => (
        <List.Item key={val.id}>
          <HStack>
            <Image src={val.image_background} boxSize='42px' borderRadius={8}/>
            <Text fontSize={'lg'}>{val.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  )
}

export default GenreGrid
 