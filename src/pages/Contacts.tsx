import {
  Card,
  Box,
  Flex,
  AbsoluteCenter,
  Text,
  Button,
  Separator,
} from "@chakra-ui/react";

import { MdOutlineMailOutline, MdOutlinePlace } from "react-icons/md";
import { DiGithubBadge } from "react-icons/di";

const contactItems = [
  {
    icon: <MdOutlinePlace size={20} />,
    label: "Budapest, Hungary",
  },
  {
    icon: <MdOutlineMailOutline size={20} />,
    label: "zsofia.demjen21@gmail.com",
    href: "mailto:zsofia.demjen21@gmail.com",
  },
];

const socialLinks = [
  {
    icon: <DiGithubBadge size={28} />,
    label: "GitHub",
    href: "https://github.com/zsofiademjen21-lab",
  },
];

function Contacts() {
  return (
    <Box position="relative" height="100vh">
      <AbsoluteCenter>
        <Card.Root
          width="700px"
          height="500px"
          bg="blackAlpha.800"
          borderColor="black"
          color="white"
        >
          <Card.Body gap="6">
            <Card.Title fontSize="2xl">Get in touch</Card.Title>

            <Card.Description fontSize="md" color="white" textAlign="justify">
              Feel free to reach out for collaboration, opportunities, or just
              to connect. I'm always happy to hear from you.
            </Card.Description>

            <Separator borderColor="whiteAlpha.300" />

            <Flex direction="column" gap={4}>
              {contactItems.map(({ icon, label, href }) => (
                <Flex key={label} align="center" gap={3}>
                  <Box color="whiteAlpha.700">{icon}</Box>
                  {href ? (
                    <a
                      href={href}
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      <Text
                        fontSize="md"
                        _hover={{ color: "whiteAlpha.700" }}
                        transition="color 0.2s"
                      >
                        {label}
                      </Text>
                    </a>
                  ) : (
                    <Text fontSize="md" color="whiteAlpha.900">
                      {label}
                    </Text>
                  )}
                </Flex>
              ))}
            </Flex>

            <Separator borderColor="whiteAlpha.300" />

            <Flex direction="column" gap={2}>
              <Text fontSize="sm" color="whiteAlpha.600" letterSpacing="wide">
                FIND ME ON
              </Text>
              <Flex gap={4}>
                {socialLinks.map(({ icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "inherit" }}
                    title={label}
                  >
                    <Box
                      color="whiteAlpha.800"
                      _hover={{ color: "white" }}
                      transition="color 0.2s"
                    >
                      {icon}
                    </Box>
                  </a>
                ))}
              </Flex>
            </Flex>
          </Card.Body>

          <Card.Footer>
            <a href="mailto:zsofia.demjen21@gmail.com">
              <Button colorScheme="whiteAlpha" variant="outline" color="white">
                Send me an email
              </Button>
            </a>
          </Card.Footer>
        </Card.Root>
      </AbsoluteCenter>
    </Box>
  );
}

export default Contacts;
