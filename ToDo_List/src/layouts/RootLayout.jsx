import { Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="brand.100">
      <GridItem
        as="aside"
        colSpan={{ base: 6, lg: 1, xl: 1 }}
        bgGradient="linear(to-b, brand.300, brand.200)"
        // minHeight is set to full screen
        minHeight={{ lg: "100vh" }}
        // added minWidth, so text doesn't flex into column
        minWidth="181px"
        p={{ base: "20px", md: "30px" }}
      >
        <Sidebar />
      </GridItem>
      <GridItem as="main" colSpan={{ base: 6, lg: 4, xl: 5 }} p="40px">
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  );
}
