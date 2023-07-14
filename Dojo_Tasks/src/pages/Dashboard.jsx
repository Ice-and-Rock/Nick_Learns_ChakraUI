import { Box, Container, Heading, Text } from "@chakra-ui/react";

export default function Dashboard() {
  const boxStyles = {
    //padding
    p: "10px",
    //backgorund color
    bg: "purple.400",
    //text color
    color: "white",
    //margin
    m: "10px",
    //textAlign
    textAlign: "center",
    //blur filter
    filter: "blur(2px)",
    //hover with mouse
    ":hover": {
      color: "black",
      bg: "blue.200",
    },
  };

  return (
    <Container as="section" maxWidth="4xl" py="20px">
      <Heading my="30px" p="10px">
        Chakra UI Components
      </Heading>
      <Text merginLeft="30px">This is where the test goes, nick!</Text>
      <Text ml="30px" color="blue.300" fontWeight="bold">
        This is where the text goes, nick!
      </Text>
      <Box my="30px" p="20px" bg="orange">
        <Text color="white">This is a box</Text>
      </Box>

      <Box sx={boxStyles}>Hello, people who are looking at my work...</Box>
    </Container>
  );
}
