import { Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { IoArrowRedo } from "react-icons/io5";

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
        <HStack key={i} alignItems={"start"}>
          <IoArrowRedo size={30} color={service.color} />
          <VStack alignItems={"left"}>
            <Heading fontSize={"20px"}>{service.heading}</Heading>
            <Text fontSize={"12px"} color={"#92959A"}>
              {service.description}
            </Text>
          </VStack>
        </HStack>
      ))}
    </>
  );
}
