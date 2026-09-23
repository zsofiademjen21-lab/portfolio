import Header from "../components/Header";
import { Outlet } from "react-router";
import { Box } from "@chakra-ui/react";

function MainLayout() {
  return (
    <>
      <Header />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="calc(100vh - 72px)"
        py={{ base: 8, md: 0 }}
        px={{ base: 4, md: 0 }}
      >
        <Outlet />
      </Box>
    </>
  );
}

export default MainLayout;
