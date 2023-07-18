import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  IconButton,
  Text,
} from "@chakra-ui/react";

export default function Profile() {
  return (
    <Card bg="brand.200">
      <CardHeader>User Profile</CardHeader>
      <CardBody display="flex" alignItems="center" bg="brand.300" margin="10px" borderRadius={8}>
        <Text flex="1">Nick Valente</Text>
        <Box display="flex" alignItems="center" justifyContent="center">
          <EditIcon marginRight={3}/>
          <DeleteIcon />
        </Box>
      </CardBody>
      <CardBody display="flex" alignItems="center" bg="brand.300" margin="10px" borderRadius={8}>
        <Text flex="1">Nick Valente</Text>
        <Box display="flex" alignItems="center" justifyContent="center">
          <EditIcon marginRight={3}/>
          <DeleteIcon />
        </Box>
      </CardBody>
    </Card>
  );
}
