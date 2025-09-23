import { Box, Grid, GridItem, useBreakpointValue, Flex } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreGrid from "./components/GenreGrid";
import GenreGridStacked from "./components/GenreGridStacked";

function App() {
  const asideMode = useBreakpointValue({
    base: "hidden",
    md: "stacked",
    lg: "side"
  });

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        md: asideMode === "stacked" ? `"nav" "aside" "main"` : `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
        xl: `"nav nav" "aside main"`
      }}
      templateColumns={{
        base: "1fr",
        md: asideMode === "stacked" ? "1fr" : "1fr",
        lg: "200px 1fr",
        xl: "250px 1fr"
      }}
      bg="#121826"
      minH="100vh"
    >
      {/* Navbar */}
      <GridItem area="nav" bg="#1B2430" p={4}>
        <NavBar />
      </GridItem>

        <GridItem
          area="aside"
          bg="#1E2A38"
          p={5}
          borderRight="1px solid #3a3a3a"
        >
          {asideMode !== "hidden" && (
        asideMode === "stacked" ? (
            <GenreGridStacked />) :(<GenreGrid />)
          )}
          
        </GridItem>

      {/* Main Content */}
      <GridItem area="main" p={5}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
