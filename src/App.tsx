import {
  Box,
  createLocalStorageManager,
  ChakraProvider,
} from "@chakra-ui/react";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import FeaturesSection from "./components/FeaturesSection";
import PricingSection from "./components/PricingSection";

function App() {
  const manager = createLocalStorageManager("my-key");

  return (
    <ChakraProvider colorModeManager={manager}>
      <Box m='0'  overflow={'hidden'}>
        <HeroSection/>
        <ServicesSection/>
        <FeaturesSection/>
        <PricingSection/>
      </Box>
    </ChakraProvider>
  );
}

export default App;
