import {
    Box,
    Button,
    Grid,
    GridItem,
    Heading,
    Highlight,
    Image,
    Text,
    Hide,
    Center,
  } from "@chakra-ui/react";

export default function Hero() {
  return (
    <GridItem w="100%">
    <Grid
      templateColumns={{ base: "1fr",lg: "repeat(2, 1fr)" }}
      h={{md: "50", lg:"100%"}}
      transitionDelay="0s, 0s, 0s, 0s"
      transitionDuration=" 0.25s, 0.25s, 0.25s, 0s"
      transition-property="box-shadow, background-color, filter, border"
      transitionTimingFunction="linear, linear, linear, linear"
      justifyContent={{ lg: "center" }}
      lineHeight="25.6px"
      mx="auto"
      px={{
        base: "15px",
        md: "10px",
      }}
      pt={{
        lg: "1rem",
      }}
      w={{
        base: "calc(100vw - 6%)",
        md: "calc(100vw - 8%)",
        lg: "calc(100vw - 6%)",
        xl: "calc(100vw - 350px)",
        "2xl": "calc(100vw - 365px)",
      }}
    >
      <Box
        p={{ base: "1rem",md: '0.5rem' ,lg: "2rem 4rem" }}
        order={{ md: "1", lg: "0" }}
      >
        <Heading
          fontSize={"3.2rem"}
          fontWeight={"700"}
          maxWidth={{ xl: "90%" }}
          textAlign={{ base: "center", lg: "left" }}
          lineHeight={{ base: "60px", lg: "70px" }}
        >
          Codext one of the best system in{" "}
          <Highlight query={"saas"} styles={{ color: "#2657A4" }}>
            SAAS
          </Highlight>
        </Heading>
        <Text
          fontSize={{ base: "13px", lg: "15px" }}
          lineHeight="20.6px"
          maxWidth={{ lg: "80%" }}
          textAlign={{ base: "center", lg: "left" }}
          my={{ base: "12px", lg: "18px" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Tempora laborum exercitationem officiis rerum blanditiis, ipsam
          cupiditate assumenda ex ratione sequi est consequatur quas.
        </Text>
        <Box textAlign={{ base: "center", lg: "left" }}>
          <Button
            _hover={{
              background: "#1C417B",
            }}
            bgColor={"#2657A4"}
            borderRadius={"5px"}
            padding={"1.5rem"}
          >
            <Text
              fontSize={"1rem"}
              color={"white"}
              casing={"capitalize"}
              fontWeight="500"
            >
              Try a live demo
            </Text>
          </Button>
        </Box>
      </Box>
      <Hide below="md">
        <Center>
          <Box boxSize={{ base: "xl", lg: "xl" }}>
            <Image src="/hero.svg" alt="Hero Image" />
          </Box>
        </Center>
      </Hide>
    </Grid>
  </GridItem>
  )
}
