import { Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { IoArrowRedo } from "react-icons/io5";
import { motion } from "framer-motion";

interface ServiceProps {
  heading: string;
  color: string;
  description: string;
}

interface Props {
  services: ServiceProps[];
}

export default function Service({ services }: Props) {
  return (
    <>
      {services.map((service, i) => (
        <HStack
          as={motion.div}
          display={"flex"}
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition='0.1s linear'
          viewport={{once: true}}
          key={i}
          alignItems={"start"}
          justifyContent={'start'}
        >
          <IoArrowRedo size={'50px'} color={service.color} />
          <VStack alignItems={"left"}>
            <Heading fontSize={{ base: "20px",lg:"25px"}}>{service.heading}</Heading>
            <Text fontSize={{ base: "12px",lg:"14px"}} color={"#92959A"}>
              {service.description}
            </Text>
          </VStack>
        </HStack>
      ))}
    </>
  );
}
