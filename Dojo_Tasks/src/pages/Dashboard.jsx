import { Box, Container, Heading, Text, SimpleGrid } from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <SimpleGrid columns={4} spacing={10} minChildWidth="250px">
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>

      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>

      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
    </SimpleGrid>
  );
}

// Practice of IN-LINE STYLE
// <Container as="section" maxWidth="4xl" py="20px">
//   <Heading my="30px" p="10px">
//     Chakra UI Components
//   </Heading>
//   <Text ml="30px">This is where the test goes, nick!</Text>
//   <Text ml="30px" color="blue.300" fontWeight="bold">
//     This is where the text goes, nick!
//   </Text>
//   <Box my="30px" p="20px" bg="orange">
//     <Text color="white">This is a box</Text>
//   </Box>

//   <Box style={boxStyles}>Hello, people who are looking at my work...</Box>
// </Container>
