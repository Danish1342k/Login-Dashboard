import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import {
  Box,
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  useToast,
  HStack,
} from '@chakra-ui/react';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const toast = useToast();
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const handleForgotPassword = () => {
    setEmailError('');
    if (!email || !emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    setTimeout(() => {
      toast({
        title: 'Password Reset Requested',
        description: `An email has been sent to ${email} with instructions to reset your password, Reset your password & Login again`,
        // description: `Reset your password & Login again.`,
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });
    }, 2000);
  };

  return (
    <Flex align="center" justify="center" minHeight="100vh" bg="gray.50">
      <Box
        width={{ base: '300px', md: '400px' }}
        p={6}
        bg="white"
        borderRadius="md"
        boxShadow="md"
      >
        <Heading as="h5" mb={4} color="gray.800">
          Forgot Password
        </Heading>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            placeholder="Email"
            mb={2}
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            isInvalid={!!emailError}
          />
          {emailError && (
            <Text fontSize="sm" color="red.500">
              {emailError}
            </Text>
          )}
        </FormControl>
        <Button colorScheme="gray" onClick={handleForgotPassword}>
          Reset Password
        </Button>
        <HStack marginTop="4">
          <Button colorScheme="blue">
            <NavLink to="/">Log in</NavLink>
          </Button>
        </HStack>
      </Box>
    </Flex>
  );
}

export default ForgotPassword;
