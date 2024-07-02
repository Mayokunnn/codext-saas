import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

interface FeatureProps {
  color: string;
  title: string;
  image: string;
  description: string;
  direction: number;
  speed: string;
}

export default function FeatureCard({
  color,
  title,
  image,
  description,
  direction,
  speed,
}: FeatureProps) {
  return (
    <Box
      as={motion.div}
      initial={{ x: direction, y: 10, opacity: 0 }}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      transition={`${speed} linear`}
      viewport={{ once: true }}
    >
      <Card
        maxWidth={"260px"}
        height={"24rem"}
        py="1rem"
        border={"0"}
        cursor={"pointer"}
        _hover={{
          boxShadow: "0px 4px 3px 0px rgba(57, 85, 211, 1)",
        }}
        transition="0.3s linear"

      >
        <CardBody>
          <VStack justifyContent={"space-between"} h="100%">
            <Box borderRadius={"50%"} p="40px" bgColor={color}>
              <Image w="55px" src={image} alt="Feature" />
            </Box>
            <Spacer />
            <VStack alignItems={"center"} justifyContent={"space-between"}>
              <Heading
                fontSize={"25px"}
                fontWeight={"500"}
                textAlign={"center"}
              >
                {title}
              </Heading>
              <Text
                fontSize="0.9rem"
                lineHeight={"1.2rem"}
                fontWeight={"400"}
                textAlign={"center"}
              >
                {description}
              </Text>
              <Box>
                <Image src="/more-arrow.svg" />
              </Box>
            </VStack>
          </VStack>
        </CardBody>
      </Card>
    </Box>
  );
}
