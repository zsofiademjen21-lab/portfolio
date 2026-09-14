import {
  Card,
  Box,
  Flex,
  AbsoluteCenter,
  Text,
  Button,
} from "@chakra-ui/react";

import { DiGithubBadge } from "react-icons/di";

function Projects() {
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
            <Flex gap={6} align="center">
              <Card.Title fontSize="2xl">Projects</Card.Title>
            </Flex>
            <Flex
              direction="column"
              align="center"
              justify="center"
              flex={1}
              gap={3}
              py={8}
            >
              <Text fontSize="lg" color="whiteAlpha.800">
                No projects yet
              </Text>
              <Text fontSize="sm" color="whiteAlpha.600" textAlign="center">
                I'm currently working on building my portfolio. Check back soon,
                or follow my GitHub to see what I'm working on.
              </Text>
            </Flex>
          </Card.Body>
          <Card.Footer>
            <a
              href="https://github.com/zsofiademjen21-lab"
              target="_blank"
              rel="noreferrer"
            >
              <Button colorScheme="whiteAlpha" variant="outline" color="white">
                <DiGithubBadge size={20} />
                View GitHub
              </Button>
            </a>
          </Card.Footer>
        </Card.Root>
      </AbsoluteCenter>
    </Box>
  );
}

export default Projects;
