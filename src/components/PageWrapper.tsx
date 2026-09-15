import { Box, AbsoluteCenter } from "@chakra-ui/react";

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Box position="relative" height="100vh">
      <AbsoluteCenter>{children}</AbsoluteCenter>
    </Box>
  );
}

export default PageWrapper;
