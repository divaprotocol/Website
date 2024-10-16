import {
  Heading,
  Stack,
  Text,
  Button,
  Image,
  Box,
  Link,
  VStack,
} from "@chakra-ui/react";

import { TbArrowUpRight } from "react-icons/tb";

export const TokenSection = () => {
  return (
    <Box>
      <Stack
        align={"center"}
        justify="space-around"
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={["column", "column", "row", "row", "row"]}
      >
        <Stack
          width={["100%", "100%", "100%", "60%", "60%"]}
          justify="center"
          align={"center"}
        >
          <Image
            position={"relative"}
            alt={"Hero Image"}
            src={"/images/DivaToken.png"}
          />
        </Stack>
        <Stack
          width={["100%", "100%", "100%", "60%", "60%"]}
          spacing={{ base: 5, md: 10 }}
        >
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "20px", sm: "30px", lg: "40px" }}
            color="white"
          >
            The DIVA Token
          </Heading>
          <Text
            color={"#A4A4A4"}
            maxW={"4xl"}
            fontWeight={400}
            fontSize={["sm", "sm", "xl", "xl", "xl"]}
            lineHeight={["none", "none", "6", "6", "6"]}
          >
            $DIVA is the native token that is used to govern the DIVA Protocol. 
            The token model was designed to enable efficient and effective 
            governance and offer flexibility to adapt to 
            the various stages of the protocol lifecycle and constantly changing 
            market conditions. There will be a maximum of 100m tokens in circulation.
            40% will be released over 2 years and the remaining 60% over 30 years.
          </Text>

          <Stack
            direction={["column", "column", "row", "row", "row"]}
            spacing={6}
          >
            <Link
              style={{ textDecoration: "none" }}
              href="https://www.divaprotocol.io/posts/diva-tokenomics"
              isExternal
            >
              <Button
                textAlign={"center"}
                color="#00C2FF"
                rightIcon={<TbArrowUpRight />}
                borderColor="{Linear Gradient rgba(0, 194, 255, 1) rgba(0, 56, 255, 1)}"
                variant="outline"
                size="lg"
                width="200px"
                fontFamily={"body"}
                fontSize="16px"
                fontWeight={"500"}
                _hover={{ bg: "none" }}
              >
                LEARN MORE
              </Button>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              href="https://divaprotocol.io/rewards"
            >
              <Button
                textAlign={"center"}
                bg="linear-gradient(270deg, #00C2FF 0%, #0038FF 100%)"
                borderRadius="6px"
                fontFamily={"body"}
                fontSize="16px"
                fontWeight={"500"}
                color={"#F2F2F2"}
                _hover={{ color: "black" }}
                size="lg"
                width="200px"
              >
                CHECK REWARD
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Stack>
      <Box pt="5rem" pb="10rem">
        <Heading
          textAlign={"center"}
          lineHeight={1.1}
          fontWeight={400}
          fontSize={{ base: "20px", sm: "30px", lg: "40px" }}
          color="gray"
        >
          More details coming soon!
        </Heading>
      </Box>
    </Box>
  );
};
