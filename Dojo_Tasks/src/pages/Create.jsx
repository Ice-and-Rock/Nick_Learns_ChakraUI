import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { Form, redirect } from "react-router-dom";

export default function Create() {
  return (
    <Box maxW="480px">
      <Form method="post" action="/create">
        <FormControl isRequired mb="4px">
          <FormLabel>Task name:</FormLabel>
          <Input type="text" name="title" borderColor="brand.500" />
          <FormHelperText>Enter a descriptive task name.</FormHelperText>
        </FormControl>
        <FormControl borderColor="brand.500" marginBottom="10px">
          <FormLabel>Task description:</FormLabel>
          <Textarea
            placeholder="Enter a detailed descrition of the task..."
            name="description"
          ></Textarea>
        </FormControl>
        <FormControl display="flex" alignItems="center" mb="40px">
          <Checkbox
            borderColor="brand.400"
            name="isPriority"
            size="lg"
            color="purple.400"
          />
          <FormLabel marginBottom="0" ml="10px">
            Make this a priority task.
          </FormLabel>
        </FormControl>
        <Button bg="brand.400" type="submit">
          Submit!
        </Button>
      </Form>
    </Box>
  );
}

// Create an action below from React router DOM
// function that fires when the above form is sent (request object)
// retreives the data from the request object (data.get('fieldType'))
export const createAction = async ({ request }) => {
  const data = await request.formData();

  const task = {
    title: data.get("title"),
    description: data.get("description"),
    // boolean statement either exists, or not
    isPriority: data.get("isPriority") === "",
  };

  console.log(task);

  // redirects user to the root page
  return redirect("/");
};
