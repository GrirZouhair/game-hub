import useGenres from "@/hooks/useGenres";
import { HStack, Text, Image, Flex, SimpleGrid, Box } from "@chakra-ui/react";

const GenreGridStacked = () => {
  const { data } = useGenres();

  return (
    <Flex 
      direction="column" 
      bg="#1E2A38" 
      p={5} 
      borderRadius="xl" 
      minH="full"
    >
      {/* Header */}
      <Box pb={4}>
        <Text fontSize="2xl" fontWeight="bold" color="gray.100">
          Game Genres
        </Text>
      </Box>

      {/* Genres Grid */}
      <SimpleGrid 
        columns={{ md: 4 }} 
        w="full"
      >
        {data.map((genre) => (
          <Box
            key={genre.id}
            p={3}
            bg="#2A3344"     
            borderRadius="lg"
            shadow="sm"
            transition="all 0.2s"
            cursor="pointer"
            _hover={{
              shadow: "md",
              transform: "translateY(-2px)",
              bg: "#3A4050"     
            }}
          >
            <HStack  align="center">
              <Image
                src={genre.image_background}
                boxSize="48px"
                borderRadius="md"
                objectFit="cover"
                
              />
              <Text 
                fontSize="md" 
                fontWeight="semibold"
                color="gray.100"
            
              >
                {genre.name}
              </Text>
            </HStack>
          </Box>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default GenreGridStacked;
