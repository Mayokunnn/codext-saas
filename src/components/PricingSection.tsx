import {
  Box,
  Grid,
  Heading,
  Highlight,
  SimpleGrid,
  Switch,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import PricingCard from "./PricingCard";

export default function PricingSection() {
  const prices = [
    {
      price: "10",
      title: "Start-up",
      features: [
        "Easy Communication",
        "Commercial License",
        "Single User license",
        "Hotline support 24/7",
      ],
      direction: -200,
      speed: "0.5s",
    },
    {
      price: "30",
      title: "Classic",
      features: [
        "Easy Communication",
        "Commercial License",
        "5 User license",
        "Hotline support 24/7",
      ],
      speed: "0.3s",
      special: true,
    },
    {
      price: "49",
      title: "Premium",
      features: [
        "Easy Communication",
        "Commercial License",
        "10 User license",
        "Hotline support 24/7",
      ],
      direction: 200,
      speed: "0.5s",
    },
  ];
  return (
    <Box
      w="100%"
      py={{ base: "2rem", lg: "3rem" }}
      px={{ sm: "1rem", lg: "2rem" }}
      minHeight="100vh"
    >
      <Grid
        h="100%"
        templateRows={"200px 1fr"}
        transitionDuration=" 0.25s, 0.25s, 0.25s, 0s"
        transition-property="box-shadow, background-color, filter, border"
        transitionTimingFunction="linear, linear, linear, linear"
        justifyContent={"center"}
        alignItems={"center"}
        lineHeight="25.6px"
        mx="auto"
        px={{
          base: "15px",
          md: "4.5rem ",
        }}
        pt={{ base: "2rem", md: "0.5rem" }}
        pb={{ lg: "3rem" }}
        gap={{ lg: "2" }}
        w={{
          base: "calc(100vw - 6%)",
          md: "calc(100vw - 8%)",
          lg: "calc(100vw - 6%)",
          xl: "calc(100vw - 350px)",
          "2xl": "calc(100vw - 365px)",
        }}
      >
        <Box>
          <Heading
            as={motion.h1}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition="0.5s linear"
            lineHeight={{ base: "35px", lg: "57.2px" }}
            viewport={{ once: true }}
            textAlign={"center"}
            fontSize={{ base: "33px" }}
            m={"15px"}
          >
            Choose your best pricing plan
          </Heading>
          <Heading
            as={motion.h3}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition="0.5s linear"
            viewport={{ once: true }}
            textAlign={"center"}
            fontWeight={"500"}
            fontSize={{ base: "18px", lg: "22px" }}
          >
            Added for monthly <Switch colorScheme="blue" />
            <Highlight query={"yearly"} styles={{ color: "#51565E" }}>
              Yearly
            </Highlight>
          </Heading>
        </Box>
        <Box display="flex" alignItems="center" w="100%">
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={10}
            w="100%"
            alignItems={"center"}
            justifyContent="center"
          >
            {prices.map((pri, i) => (
              <PricingCard
                key={i}
                title={pri.title}
                special={pri?.special}
                features={pri.features}
                price={pri.price}
                direction={pri?.direction}
                speed={pri?.speed}
              />
            ))}
          </SimpleGrid>
        </Box>
      </Grid>
    </Box>
  );
}
