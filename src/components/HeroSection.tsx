import { Box, Grid, Hide } from "@chakra-ui/react";
import NavBar from "./NavBar";
import Hero from "./Hero";

export default function HeroSection() {
  return (
    <Box
      w="100%"
      position={'relative'}
      pt="1rem"
      px={{ sm: "1rem", lg: "2rem" }}
      h={ {base: "100%", md:"100vh"}}
      pb={'2rem'}
      bgGradient={"linear(to-br,  #D7EEF2 0%, #D3D0E1 100%)"}
      // bgImage={'/waves.svg'}
      // bgPosition={'bottom'}
    >
      <Grid h="100%" templateRows={"100px 1fr"}>
        <NavBar />
        <Hero />
      </Grid>
      <Hide below="md">
        <div className="custom-shape-divider-bottom">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
    </svg>
        </div>
      </Hide>
    </Box>
  );
}
