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

    if (!password || password.length < 6) {
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
    <Flex
      align="center"
      justify="center"
      minHeight="100vh"
      bg="gray.50"
      flexDirection={{ base: 'column', md: 'column', lg: 'row' }}
      gap={{ base: '16px', md: '0', lg: '0' }}
    >
      <Box width={{ base: '300px', lg: '350px' }} p={6} bg="#9f7aea ">
        <Heading as="h5" mb={4} color="white">
          Create Account
        </Heading>
        <FormControl>
          <FormLabel color="white">User Name</FormLabel>
          <Input
            color="white"
            type="text"
            placeholder="User Name"
            mb={2}
            onChange={e => setUserName(e.target.value)}
          />
        </FormControl>
        <FormControl isInvalid={emailError !== ''}>
          <FormLabel color="white">Email</FormLabel>
          <Input
            color="white"
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
          <FormLabel color="white">Password</FormLabel>
          <Input
            color="white"
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
          <FormLabel color="white">Confirm Password</FormLabel>
          <Input
            color="white"
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
            colorScheme="teal"
            bg="white"
            variant="outline"
            onClick={handleCreteAccount}
          >
            Create Account
          </Button>
        </Center>
      </Box>

      <Box flexShrink={0} width={{ base: '300px', lg: '350px' }}>
        <Image
          src="https://media.istockphoto.com/id/998390080/photo/lavender-field-at-sunset.jpg?b=1&s=612x612&w=0&k=20&c=xQPcmOzI_lYLOKncyctQy1-u-ON1xqjORT6E3nB_4iQ="
          alt="Login Image"
          width="350px"
          height="483px"
          objectFit="cover"
        />
      </Box>
    </Flex>
  );
}

export default SignUp;
