import {
  Button,
  Flex,
  GridItem,
  Hide,
  HStack,
  Image,
  Show,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { IoMenu } from "react-icons/io5";

export default function NavBar() {
  const navItems = ["Home", "Services", "Pricing", "Testimonials", "Blog"];

  return (
    <GridItem
      transitionDelay="0s, 0s, 0s, 0s"
      transitionDuration=" 0.25s, 0.25s, 0.25s, 0s"
      transition-property="box-shadow, background-color, filter, border"
      transitionTimingFunction="linear, linear, linear, linear"
      alignItems={{ xl: "center" }}
      justifyContent={{ xl: "center" }}
      lineHeight="25.6px"
      mx="auto"
      pb="8px"
      right={{ base: "12px", md: "30px", lg: "30px", xl: "30px" }}
      px={{
        base: "15px",
        md: "10px",
      }}
      ps={{
        xl: "12px",
      }}
      pt="8px"
      top={{ base: "12px", md: "16px", lg: "20px", xl: "20px" }}
      w={{
        base: "calc(100vw - 6%)",
        md: "calc(100vw - 8%)",
        lg: "calc(100vw - 6%)",
        xl: "calc(100vw - 350px)",
        "2xl": "calc(100vw - 365px)",
      }}
    >
      <Flex
        w="100%"
        flexDirection={{
          sm: "column",
          md: "row",
        }}
        alignItems={"center"}
      >
        <Image alt="Codext Logo" src="/logo.svg" w="7rem" />
        <Spacer />
        <Hide below="md">
          <HStack
            gap={"9"}
            flexDirection={{
              sm: "column",
              md: "row",
            }}
          >
            {navItems.map((item, i) => (
              <Text
                _hover={{
                  color: "#1C417B",
                  borderBottom: "2px solid #1C417B",
                }}
                cursor={"pointer"}
                borderBottom={"2px solid transparent"}
                pb="3px"
                key={i}
              >
                {item}
              </Text>
            ))}

            <Button
              _hover={{
                background: "#1C417B",
              }}
              bgColor={"#2657A4"}
              padding="1.5rem"
            >
              <Text
                fontSize={"0.8rem"}
                color={"white"}
                fontWeight={"500"}
                casing={"uppercase"}
              >
                Free Trial
              </Text>
            </Button>
          </HStack>
        </Hide>
        <Show below="md">
          <IoMenu color="#2657A4" size={30}/>
        </Show>
      </Flex>
    </GridItem>
  );
}
