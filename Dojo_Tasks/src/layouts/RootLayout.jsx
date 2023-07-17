import { Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="grey.50">
      <GridItem
        as="aside"
        colSpan={{ base:6, lg:2, xl:1 }}
        bg="purple.400"
        minHeight={{ lg: "100vh" }}
        p={{ base: "20px", md: "30px" }}
      >
        <Sidebar/>
      </GridItem>
      <GridItem 
      as="main" 
      colSpan={{ base:6, lg:4, xl:6 }} 
      p="40px"
      >
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  );
}
