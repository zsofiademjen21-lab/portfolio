import { Card } from "@chakra-ui/react";

function PageCard({ children }: { children: React.ReactNode }) {
  return (
    <Card.Root
      width={{ base: "90vw", md: "700px" }}
      maxWidth="700px"
      minHeight={{ base: "auto", md: "500px" }}
      bg="blackAlpha.800"
      borderColor="black"
      color="white"
    >
      {children}
    </Card.Root>
  );
}

export default PageCard;
