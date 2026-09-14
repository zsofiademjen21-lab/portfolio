import { Box, Flex, Text } from "@chakra-ui/react";
import { NavLink } from "react-router";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Contacts", to: "/contacts" },
];

function Header() {
  return (
    <Box as="header" bg="black" px={12} py={5} position="relative">
      <Flex align="center" justify="space-between">
        <Text color="white" fontWeight="semibold">
          Zsófia Demjén-Nagy
        </Text>
        <Flex
          position="absolute"
          left="50%"
          transform="translateX(-50%)"
          gap={8}
        >
          {links.map(({ label, to }) => (
            <NavLink key={to} to={to}>
              {({ isActive }) => (
                <Box
                  color="white"
                  fontSize="lg"
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
