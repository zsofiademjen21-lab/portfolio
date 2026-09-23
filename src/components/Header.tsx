import { Box, Flex, Text } from "@chakra-ui/react";
import { NavLink } from "react-router";
import type { CustomRoute } from "../interfaces/Route";

const links: CustomRoute[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Contacts", to: "/contacts" },
];

function Header() {
  return (
    <Box as="header" bg="black" px={{ base: 4, md: 12 }} py={5}>
      <Flex
        align="center"
        justify={{ base: "center", md: "space-between" }}
        direction={{ base: "column", md: "row" }}
        gap={{ base: 3, md: 0 }}
        position="relative"
      >
        <Text color="white" fontWeight="semibold">
          Zsófia Demjén-Nagy
        </Text>
        <Flex
          position={{ base: "static", md: "absolute" }}
          left={{ md: "50%" }}
          transform={{ md: "translateX(-50%)" }}
          gap={{ base: 4, md: 8 }}
          flexWrap="wrap"
          justify="center"
        >
          {links.map(({ label, to }) => (
            <NavLink key={to} to={to}>
              {({ isActive }) => (
                <Box
                  color="white"
                  fontSize={{ base: "md", md: "lg" }}
                  px={2}
                  bg={isActive ? "whiteAlpha.300" : "transparent"}
                  _hover={{ bg: "whiteAlpha.200" }}
                  _active={{ bg: "whiteAlpha.400" }}
                  cursor="pointer"
                  borderRadius="md"
                >
                  {label}
                </Box>
              )}
            </NavLink>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
}

export default Header;
