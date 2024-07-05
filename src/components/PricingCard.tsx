import {
  Box,
  Button,
  Card,
  CardBody,
  Divider,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

interface Props {
  special?: boolean;
  title: string;
  features: Array<string>;
  price: string;
  speed?: string;
  direction?: number;
}



export default function PricingCard({ special, title, price, features, speed, direction }: Props) {
  return (
    <Box
      as={motion.div}
      initial={{ x: special ? 0 :direction, y: special  ? 200 : 10, opacity: 0, scale: special ? 1.2 :  1}}
      whileInView={{ x: 0, y: 0, opacity: 1, scale: 1 }}
      transition={`${speed} linear`}
      viewport={{ once: true }}
      order={{md: special ? "3" : "", lg: ""}}
    >
      <Card
        maxWidth={{base:"280px", lg: "300px"}}
        minWidth={{base:"280px",}}
        height={special ? "25rem" : "24rem"}
        border={"0"}
        cursor={"pointer"}
        _hover={{
          boxShadow: "0px 4px 3px 0px rgba(57, 85, 211, 1)",
        }}
        transition="0.3s linear"
        boxShadow={"0px 0px 5px 0px"}
      >
        <CardBody p="0">
          <VStack justifyContent={"space-evenly"} h="100%">
            <Box
              display={"flex"}
              flexDirection={"column"}
              w="100%"
              h="50%"
              p="30px"
              pb={"0"}
              gap={"2"}
              alignItems={"center"}
              position={"relative"}
              bgGradient={
                special ? "linear(to-br, #4178E3 0%, #3853D3 100%)" : ""
              }
            >
              <Heading
                fontSize={{ base: "15px" }}
                color={special ? "white" :"#51565E"}
                fontWeight={"500"}
              >
                {title}
              </Heading>

              <Divider w={'50%'} />

              <Heading fontSize={{ base: "33px" }} color={special ? "white" : ""} fontWeight={"500"}>
                ${price}/
                <span style={{ fontWeight: "400", fontSize: "22px" }}>mo</span>
              </Heading>
              <div className="custom-shape-divider-bottom-2">
                <svg
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1200 120"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                    className="shape-fill"
                  ></path>
                </svg>
              </div>
            </Box>
            <VStack h='30%'  px="20px" gap={"1px"}>
              {features.map((feature, i) => (<Text key = {i} color={"#51565E"} fontSize={{ base: "13px" }}>
                {feature}
              </Text>))}
            </VStack>

            <Box h={'20'}  px="20px" pb={"30px"}>
              <Button
                _hover={{
                  background: special ? "#1C417B" : "#c9d5e9",
                }}
                bgColor={special ? " #2657A4" : "#E9EEF6"}
                borderRadius={"5px"}
                padding={"1.5rem"}
              >
                <Text
                  fontSize={{ base: "13px", lg: "15px" }}
                  color={special ? "#E9EEF6" : "#2657A4"}
                  casing={"uppercase"}
                  fontWeight="400"
                >
                  Try this package
                </Text>
              </Button>
            </Box>
          </VStack>
        </CardBody>
      </Card>
    </Box>
  );
}
