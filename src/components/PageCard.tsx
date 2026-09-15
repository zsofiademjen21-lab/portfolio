import { Card } from "@chakra-ui/react";

function PageCard({ children }: { children: React.ReactNode }) {
  return (
    <Card.Root
      width="700px"
      height="500px"
      bg="blackAlpha.800"
      borderColor="black"
      color="white"
    >
      {children}
    </Card.Root>
  );
}

export default PageCard;
