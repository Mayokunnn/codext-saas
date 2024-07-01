import {
  Box,
  createLocalStorageManager,
  ChakraProvider,
} from "@chakra-ui/react";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";

function App() {
  const manager = createLocalStorageManager("my-key");

  return (
    <ChakraProvider colorModeManager={manager}>
      <Box m='0'>
        <HeroSection/>
        <ServicesSection/>
      </Box>
    </ChakraProvider>
  );
}

export default App;
