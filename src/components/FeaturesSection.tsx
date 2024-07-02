import { Box, Container, Grid, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";

export default function FeaturesSection() {
  const features = [
    {
      image: '/code.svg',
      color: "#FAEAEA",
      title: "Clean code",
      description: "Lorem ipsum dolor sit amet ecte adipiscing elit Ipsum.",
      direction: -200,
      speed: "0.5s"
    },
    {
      image: '/analytics.svg',
      color: "#F9F2E8",
      title: "Data analytics",
      description: "Lorem ipsum dolor sit amet ecte adipiscing elit Ipsum.",
      direction: -200,
      speed: "0.2s"
    },
    {
      image: '/secure.svg',
      color: "#E7F6F5",
      title: "Fully Secured",
      description: "Lorem ipsum dolor sit amet ecte adipiscing elit Ipsum.",
      direction: 200,
      speed: "0.2s"
    },
    {
      image: '/support.svg',
      color: "#F4E7F6",
      title: "24/7 Support",
      description: "Lorem ipsum dolor sit amet ecte adipiscing elit Ipsum.",
      direction: 200,
      speed: "0.5s"
    }
  ]
  return (
    <Box w="100%" py={{base: "1rem",lg:"3rem"}} px={{ sm: "1rem", lg: "2rem" }} h={"100vh"}>
      <Grid
        h="100%"
        templateRows={"200px 1fr"}
        w={"100%"}
        justifyContent={"center"}
      >
        <Container>
          <Heading
            as={motion.h1}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition="0.5s linear"
            lineHeight={{lg:"57.2px"}}
            viewport={{ once: true }}
            textAlign={"center"}
            fontSize={{ base: "33px", lg: "44px" }}
          >
            We Provides best Feature for customer
          </Heading>
        </Container>
        <Grid
          templateColumns={{lg:"repeat(4, minmax(200px, 1fr))", md:"repeat(2, minmax(200px, 1fr))"}}
          gap={'2rem'}
          w="100%"
          justifyContent={"center"}
        >
          {features.map((feature, i) => <FeatureCard key= {i} color={feature.color} image={feature.image} description={feature.description} title={feature.title} direction = {feature.direction} speed={feature.speed} />)}
        </Grid>
      </Grid>
    </Box>
  );
}
