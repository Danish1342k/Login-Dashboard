import React from 'react';
import {
  ChakraProvider,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <ChakraProvider>
      <Flex
        as="nav"
        p="10px"
        alignItems="center"
        gap="10px"
        mb="10"
        flexDirection={{
          base: 'column',
          sm: 'inherit',
          lg: 'inherit',
          xl: 'inherit',
        }}
      >
        <Heading as="h1" color="black">
          Demo Task
        </Heading>
        <Spacer />

        <HStack spacing="20px">
          <Box bg="gray.200" p="10px" color="black">
            D
          </Box>
          <Text color="black">sdanish@ilmus.com</Text>
          <Button colorScheme="purple">
            <NavLink to="/Login"> Logout </NavLink>
          </Button>
        </HStack>
      </Flex>
    </ChakraProvider>
  );
}

export default Navbar;
