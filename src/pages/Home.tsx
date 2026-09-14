import "../App.css";
import { AbsoluteCenter, Box, Image, VStack } from "@chakra-ui/react";
import aiMiAlgorithm from "../assets/ai-mi-algorithm-svgrepo-com.svg";

const Home: React.FC = () => {
  return (
    <Box position="relative" height="100vh">
      <AbsoluteCenter>
        <VStack
          bg="blackAlpha.800"
          p={10}
          borderRadius="xl"
          width="700px"
          height="500px"
          justify="center"
          textAlign="center"
        >
          <Box color="white" fontSize="5xl" fontWeight="bold">
            Hi, I'm Zsófia Demjén-Nagy
          </Box>
          <Box color="white" fontSize="2xl">
            Artificial Intelligence Master's Student
          </Box>
          <Box color="white" fontSize="2xl">
            Q&A Test Developer Intern
          </Box>
          <Image
            src={aiMiAlgorithm}
            boxSize="120px"
            filter="invert(1)"
            mt={4}
          />
        </VStack>
      </AbsoluteCenter>
    </Box>
  );
};

export default Home;
