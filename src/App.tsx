import { Box, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreGrid from "./components/GenreGrid";



function App() {
  return (
    <>
      <Box w={'100vw'} h={'100vh'}>
        <Grid
        templateAreas={{
          base: `"nav" "main"`,
          md: `"nav" "aside" "main"`,
          xl: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: '1fr',
          lg: '200px 1fr'
        }}
      >
        <GridItem area="nav">
            <NavBar /> 
        </GridItem>
        {/* aside */}
        <GridItem
          area="aside"
          bg="gold"
          display={{ base: "none", lg: "block" }}
          paddingX={5}
        >
          <GenreGrid />
        {/*  */}

        </GridItem>
          <GridItem area="main">
            <GameGrid />
          </GridItem>
      </Grid>
      </Box>
    </>
  );
}

export default App
