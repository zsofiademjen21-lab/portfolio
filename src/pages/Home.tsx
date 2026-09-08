import "../App.css";
import { AbsoluteCenter, Box, VStack } from "@chakra-ui/react";

const Home: React.FC = () => {
  return (
    <Box position="relative" height="100vh">
      <AbsoluteCenter>
        <VStack bg="blackAlpha.800" p={10} borderRadius="xl">
          <Box color="white" fontSize="4xl" fontWeight="bold">
            Hi, I'm Zsófia Demjén-Nagy
          </Box>
          <Box color="white" fontSize="xl">
            Artificial Intelligence Master's Student
          </Box>
          <Box color="white" fontSize="xl">
            IBM Q&A Test Developer Intern
          </Box>
        </VStack>
      </AbsoluteCenter>
    </Box>
  );
};

export default Home;
