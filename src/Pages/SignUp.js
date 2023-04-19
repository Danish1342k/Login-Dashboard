import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Center,
  Image,
  FormErrorMessage,
} from '@chakra-ui/react';

function SignUp() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const handleCreteAccount = () => {
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');
    if (!email || !emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    if (!password || password.length < 4) {
      setPasswordError('Password must be at least 6 characters');
      return;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('Password and Confirm Password must match');
      return;
    }

    localStorage.setItem('userName', userName);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    const isValid = true;
    if (isValid) {
      navigate('/Login');
    }
  };
  return (
    <Flex align="center" justify="center" minHeight="100vh" bg="#9f7aea">
      <Box
        width={{ base: '300px', lg: '350px' }}
        p={6}
        bg="#fff "
        borderRadius="4"
        boxShadow=" 0px 0px 20px rgba(0, 0, 0, 0.1)"
      >
        <Heading as="h5" mb={4} color="#9f7aea">
          Create Account
        </Heading>
        <FormControl>
          <FormLabel color="#9f7aea">User Name</FormLabel>
          <Input
            color="#9f7aea"
            type="text"
            placeholder="User Name"
            mb={2}
            onChange={e => setUserName(e.target.value)}
          />
        </FormControl>
        <FormControl isInvalid={emailError !== ''}>
          <FormLabel color="#9f7aea">Email</FormLabel>
          <Input
            color="black"
            type="email"
            placeholder="Email"
            mb={2}
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          {emailError && (
            <FormErrorMessage color="red">{emailError}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={passwordError !== ''}>
          <FormLabel color="#9f7aea">Password</FormLabel>
          <Input
            color="black"
            type="password"
            placeholder="Password"
            mb={4}
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          {passwordError && (
            <FormErrorMessage color="red">{passwordError}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={confirmPasswordError !== ''}>
          <FormLabel color="#9f7aea">Confirm Password</FormLabel>
          <Input
            color="black"
            type="password"
            placeholder="Password"
            mb={4}
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
        </FormControl>
        {confirmPasswordError && (
          <FormErrorMessage color="red">
            {confirmPasswordError}
          </FormErrorMessage>
        )}
        <Center gap="10px">
          <Button
            colorScheme="purple"
            bg="#9f7aea"
            fontWeight="bold"
            onClick={handleCreteAccount}
          >
            Sign In
          </Button>
        </Center>
      </Box>
    </Flex>
  );
}

export default SignUp;
