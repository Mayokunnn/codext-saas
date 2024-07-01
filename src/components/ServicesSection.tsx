import {
  Box,
  Center,
  Grid,
  Heading,
  Hide,
  Image,
  Spacer,
  VStack,
} from "@chakra-ui/react";
import Service from "./Service";

export default function ServicesSection() {
  const services = [
    {
      heading: "Ultra fast & Secure",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. vitae velit proin justo, elementum sit. In morbi dolor sodales vestibulum cras. Consequat.",
      color: "#B25D0F",
    },
    {
      heading: "Allows customization",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. vitae velit proin justo, elementum sit. In morbi dolor sodales vestibulum cras. Consequat.",
      color: "#4D9D0E",
    },
    {
      heading: "Smart contract",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. vitae velit proin justo, elementum sit. In morbi dolor sodales vestibulum cras. Consequat.",
      color: "#0E479D",
    },
  ];
  return (
    <Box w="100%" pt="1rem" px={{ sm: "1rem" }} h={"100vh"}>
      <Grid
        templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
        h={{ base: "100%", md: "40%", lg: "100%" }}
        transitionDelay="0s, 0s, 0s, 0s"
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
        gap={{ lg: "10" }}
        w={{
          base: "calc(100vw - 6%)",
          md: "calc(100vw - 8%)",
          lg: "calc(100vw - 6%)",
          xl: "calc(100vw - 350px)",
          "2xl": "calc(100vw - 365px)",
        }}
      >
        <Hide below="md">
          <Center h={"100%"} boxSize={{ base: "xl", lg: "xl" }}>
            <Image src="/services.svg" alt="Hero Image" />
          </Center>
        </Hide>
        <Box>
          <VStack gap={"6"}>
            <Heading fontSize={"30px"}>
              It's very helpful for operating system
            </Heading>
            <Spacer />
            <VStack>
              <Service services={services} />
            </VStack>
          </VStack>
        </Box>
      </Grid>
    </Box>
  );
}
