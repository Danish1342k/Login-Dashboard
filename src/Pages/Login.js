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

    if (!password || password.length < 4) {
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
    <Flex align="center" justify="center" minHeight="100vh" bg="#9f7aea">
      <Box
        width={{ base: '300px', lg: '350px' }}
        p={6}
        bg="#fff"
        borderRadius="4"
        boxShadow=" 0px 0px 20px rgba(0, 0, 0, 0.1)"
      >
        <Heading as="h5" mb={4} color="#9f7aea" fontWeight="bold">
          Welcome Back to Pretty Login
        </Heading>
        <Text fontSize="sm" mb={4} color="#9f7aea">
          It's great to have you back!
        </Text>
        <FormControl>
          <FormLabel color="#9f7aea" fontWeight="bold">
            Email
          </FormLabel>
          <Input
            color="gray.700"
            type="email"
            placeholder="Email"
            mb={2}
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            isInvalid={!!emailError}
            _placeholder={{ color: 'gray.400' }}
          />
          {emailError && (
            <Text fontSize="sm" color="red.500">
              {emailError}
            </Text>
          )}
        </FormControl>
        <FormControl>
          <FormLabel color="#9f7aea" fontWeight="bold">
            Password
          </FormLabel>
          <Input
            color="gray.700"
            type="password"
            placeholder="Password"
            mb={4}
            maxLength={8}
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            isInvalid={!!passwordError}
            _placeholder={{ color: 'gray.400' }}
          />
          {passwordError && (
            <Text fontSize="sm" color="red.500">
              {passwordError}
            </Text>
          )}
        </FormControl>
        <Flex align="center" justify="space-between" mb={4}>
          <Checkbox color="#9f7aea" fontWeight="bold">
            Remember me
          </Checkbox>
          <Link color="#9f7aea" fontSize="sm">
            <NavLink to="/ForgotPassword">Forgot Password?</NavLink>
          </Link>
        </Flex>
        <Center gap="10px">
          <Button
            colorScheme="purple"
            bg="#9f7aea"
            fontWeight="bold"
            onClick={handleLogin}
          >
            Log in
          </Button>
          <Button color="#9f7aea" bg="white" variant="outline">
            <NavLink to="/">Create Account</NavLink>
          </Button>
        </Center>
      </Box>
    </Flex>
  );
}

export default Login;
