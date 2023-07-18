import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  IconButton,
  Text,
} from "@chakra-ui/react"

export default function Profile() {
  return (
    <Card bg="brand.200">
      <CardHeader>User Profile</CardHeader>

      <CardBody display="flex" alignItems="center" bgGradient="linear(to-b, brand.300, brand.350)" margin="10px" borderRadius={8}>
        <Text fontWeight="bold" flexBasis="100px">Name:</Text>
        <Text flex="1">Nick Valente</Text>
        <Box display="flex" alignItems="center" justifyContent="center">
          <EditIcon marginRight={3} />
          <DeleteIcon />
        </Box>
      </CardBody>

      <CardBody display="flex" alignItems="center" bgGradient="linear(to-b, brand.300, brand.350)" margin="10px" borderRadius={8}>
        <Text fontWeight="bold" flexBasis="100px">Email:</Text>
        <Text flex="1">nvalente.electrics@gmail.com</Text>
        <Box display="flex" alignItems="center" justifyContent="center">
          <EditIcon marginRight={3} />
          <DeleteIcon />
        </Box>
      </CardBody>

      <CardBody display="flex" alignItems="center" bgGradient="linear(to-b, brand.300, brand.350)" margin="10px" borderRadius={8}>
        <Text fontWeight="bold" flexBasis="100px">Location:</Text>
        <Text flex="1">Edinbrugh City, with a bonnie wee lass</Text>
        <Box display="flex" alignItems="center" justifyContent="center">
          <EditIcon marginRight={3} />
          <DeleteIcon />
        </Box>
      </CardBody>
    </Card>
  );
}
