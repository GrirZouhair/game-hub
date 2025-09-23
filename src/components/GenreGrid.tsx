import useGenres from "@/hooks/useGenres";
import { VStack, HStack, Text, Image, Box } from "@chakra-ui/react";

const GenreGrid = () => {
  const { data } = useGenres();

  return (
    <VStack align="stretch" >
      {data.map((genre) => (
        <Box
          key={genre.id}
          p={2}
          borderRadius="md"
          bg="#2A3344"          
          cursor="pointer"
          transition="all 0.2s"
          _hover={{ bg: "#3A4050" }}
        >
          <HStack >
            <Image
              src={genre.image_background}
              boxSize="42px"
              borderRadius="md"
              objectFit="cover"
            />
            <Text fontSize="md" color="gray.100">
              {genre.name}
            </Text>
          </HStack>
        </Box>
      ))}
    </VStack>
  );
};

export default GenreGrid;
