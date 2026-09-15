import { Box } from "@chakra-ui/react";

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="calc(100vh - 72px)"
      py={{ base: 8, md: 0 }}
      px={{ base: 4, md: 0 }}
    >
      {children}
    </Box>
  );
}

export default PageWrapper;
