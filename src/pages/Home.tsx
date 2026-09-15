import "../App.css";
import { Image, VStack } from "@chakra-ui/react";
import aiMiAlgorithm from "../assets/ai-mi-algorithm-svgrepo-com.svg";
import { Separator, Box } from "@chakra-ui/react";
import PageWrapper from "../components/PageWrapper";

const Home: React.FC = () => {
  return (
    <PageWrapper>
      <VStack
        bg="blackAlpha.800"
        p={{ base: 6, md: 10 }}
        borderRadius="xl"
        width={{ base: "90vw", md: "700px" }}
        maxWidth="700px"
        minHeight={{ base: "auto", md: "500px" }}
        justify="center"
        textAlign="center"
      >
        <Box color="white" fontSize="5xl" fontWeight="bold">
          Hi, I'm Zsófia Demjén-Nagy
        </Box>
        <Separator borderColor="whiteAlpha.300" width="100%" />
        <Box color="white" fontSize="2xl">
          Artificial Intelligence Master's Student
        </Box>
        <Box color="white" fontSize="2xl">
          Q&A Test Developer Intern
        </Box>
        <Separator borderColor="whiteAlpha.300" width="100%" />
        <Image src={aiMiAlgorithm} boxSize="120px" filter="invert(1)" mt={4} />
      </VStack>
    </PageWrapper>
  );
};

export default Home;
