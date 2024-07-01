import {
  Box,
  Grid,
} from "@chakra-ui/react";
import NavBar from "./NavBar";
import Hero from "./Hero";

export default function HeroSection() {
  return (
    <Box
      w="100%"
      pt="1rem"
      px={{ sm: "1rem", lg: "2rem" }}
      h={"100vh"}
      bgGradient={"linear(to-br,  #D7EEF2 0%, #D3D0E1 100%)"}
    >
      <Grid h="100%" templateRows={"100px 1fr"}>
        <NavBar />
        <Hero/>
      </Grid>
    </Box>
  );
}
