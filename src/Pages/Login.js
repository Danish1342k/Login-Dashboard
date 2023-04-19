import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  Box,
  Flex,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Button,
  Link,
  Image,
  Center,
} from '@chakra-ui/react';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const handleLogin = () => {
    setEmailError('');
    setPasswordError('');

    if (!email || !emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    if (!password || password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      return;
    }

    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (email === storedEmail && password === storedPassword) {
      navigate('/Dashboard');
    } else {
      setEmailError('Invalid email or password');
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
      <Box width={{ base: '300px', lg: '350px' }} p={6} bg="#9f7aea">
        <Heading as="h5" mb={4} color="white">
          Welcome Back to Pretty Login
        </Heading>
        <Text fontSize="sm" color="gray.600" mb={4} color="white">
          It's great to have you back!
        </Text>
        <FormControl>
          <FormLabel color="white">Email</FormLabel>
          <Input
            color="white"
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
        <FormControl>
          <FormLabel color="white">Password</FormLabel>
          <Input
            color="white"
            type="password"
            placeholder="Password"
            mb={4}
            maxLength={8}
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            isInvalid={!!passwordError}
          />
          {passwordError && (
            <Text fontSize="sm" color="red.500">
              {passwordError}
            </Text>
          )}
        </FormControl>
        <Flex align="center" justify="space-between" mb={4}>
          <Checkbox color="white">Remember me</Checkbox>
          <Link color="white" fontSize="sm">
            <NavLink to="/ForgotPassword">Forgot Password?</NavLink>
          </Link>
        </Flex>
        <Center gap="10px">
          <Button colorScheme="blue" onClick={handleLogin}>
            Log in
          </Button>
          <Button colorScheme="teal" bg="white" variant="outline">
            <NavLink to="/">Create Account</NavLink>
          </Button>
        </Center>
      </Box>

      <Box flexShrink={0} width={{ base: '300px', lg: '350px' }}>
        <Image
          src="https://media.istockphoto.com/id/998390080/photo/lavender-field-at-sunset.jpg?b=1&s=612x612&w=0&k=20&c=xQPcmOzI_lYLOKncyctQy1-u-ON1xqjORT6E3nB_4iQ="
          alt="Login Image"
          width="350px"
          height="435px"
          objectFit="cover"
        />
      </Box>
    </Flex>
  );
}

export default Login;
