import { UnlockIcon } from "@chakra-ui/icons";
import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Spacer,
  Text,
  useToast,
} from "@chakra-ui/react";

const Navbar = () => {
  // use Chakra's Toast component for pop-up alerts
  const toast = useToast();

  // add a toast funciton for a pop-up box
  // use an onClick event form the logout button
  const showToast = () => {
    toast({
      title: "Logged out",
      description: "You've been logged out!",
      duration: 3000,
      isClosable: true,
      status: "success",
      position: "top",
      // change for a different icon
      icon: <UnlockIcon />,
    });
  };

  return (
    <Flex as="nav" p="10px" marginBottom="40px" alignItems="center">
      <Heading as="h1">Nick's Task log...</Heading>

      <Spacer />

      <HStack spacing="20px">
        // below is the avatar with a static AvatarBadge // can be changed for a
        dynamic data on how mnay tasks have been completed etc
        <Avatar src="../../public/img/mario.png">
          <AvatarBadge width="1.3em" bg="teal.400">
            <Text fontSize="xs" color="white">
              3
            </Text>
          </AvatarBadge>
        </Avatar>
        <Text>nicholas@valente-engineering.com</Text>
        <Button bg="brand.300" onClick={showToast}>
          Logout
        </Button>
      </HStack>
    </Flex>

    // <Flex bg="grey.200" justify="space-between" wrap="wrap" gap="2">
    //     <Box w="150px" h="50px" bg="red">1</Box>
    //     <Box w="150px" h="50px" bg="blue">2</Box>
    //     <Box w="150px" h="50px" flexGrow="1" bg="green">3</Box>
    //     <Box w="150px" h="50px" flexGrow="2" bg="yellow">4</Box>
    // </Flex>
  );
};

export default Navbar;
