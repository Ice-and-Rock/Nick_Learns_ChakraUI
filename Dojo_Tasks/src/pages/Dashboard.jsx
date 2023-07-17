import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  HStack,
  Button,
  Divider,
} from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";

export default function Dashboard() {
  const tasks = useLoaderData();
  // console.log(tasks)

  return (
    <SimpleGrid spacing={10} minChildWidth="300px">
      {tasks &&
        tasks.map((task) => (
          <Card key={task.id} borderTop="8px" borderColor="purple.400" bg="white">
            <CardHeader>
              <Flex gap={5}>
                <Box w="50px" h="50px">
                  AW
                </Box>
                <Box>
                  <Heading as="a3" size="sm">
                    {task.title}
                  </Heading>
                  <Text>{task.author}</Text>
                </Box>
              </Flex>
            </CardHeader>
            <CardBody color="gray.500">
              <Text>{task.description}</Text>
            </CardBody>

<Divider/>

            <CardFooter>
              <HStack>
                <Button variant="ghost" leftIcon={<ViewIcon />}>Watch</Button>
                <Button variant="ghost" leftIcon={<EditIcon />}>Comment</Button>
              </HStack>
            </CardFooter>
          </Card>
        ))}
    </SimpleGrid>
  );
}

export const tasksLoader = async () => {
  //fetch data from the json server '/tasks'
  const res = await fetch("http://localhost:8000/tasks");

  return res.json();
};

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
