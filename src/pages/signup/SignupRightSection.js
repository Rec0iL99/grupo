import React, { useState } from 'react';
import {
  Flex,
  Link,
  Stack,
  Text,
  Spinner,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Image,
  useToast,
} from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import grupoLogoTeal from '../../assets/grupoLogoTeal.svg';
import GithubAuth from '../../components/githubAuth/GithubAuth';
import { useMutation } from 'react-query';
import { signupUser } from '../../api/auth';
import {
  ERROR,
  CONFLICT,
  CREATED,
  MISSING,
  ERRORTOKEN,
  SERVER_DOWN,
} from '../../utils/constants';

const SignupRightSection = () => {
  const toast = useToast();
  const history = useHistory();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
  const [password, setPassword] = useState('');
  const [authData, setAuthData] = useState({});
  const signupMutation = useMutation((signupData) => signupUser(signupData));
  const { data, error, isLoading, isSuccess, isError } = signupMutation;

  // Function that's called once Auth component passes authData
  const getAuthData = (authData) => {
    setAuthData(authData);
    setShowPasswordPrompt(true);
  };

  // Function called after user enters password
  // Then client ready to send request for signup with password
  const handleSignupClick = () => {
    setAuthData((prevState) => ({
      ...prevState,
      password: password,
    }));
    // Make the signup request to API
    signupMutation.mutate(authData);
  };

  // Signup success handling
  if (isSuccess && data.payload.message === CREATED) {
    signupMutation.reset();
    toast({
      title: 'Sign up was a success!',
      description: 'Welcome to Grupo! Login to chat with the dev community!',
      status: 'success',
      position: 'top-right',
      duration: 4000,
      isClosable: false,
    });
    history.push('/login');
  }

  // Signup error handling
  if (isError) {
    if (error.response) {
      switch (error.response.data.payload.message) {
        case CONFLICT:
          toast({
            title: 'Error on Signup',
            description: 'You have already registered! Login to use Grupo',
            status: 'error',
            position: 'top-right',
            duration: 4000,
            isClosable: false,
          });
          history.push('/login');
          break;
        case MISSING:
        case ERROR:
        case ERRORTOKEN:
          toast({
            title: 'Error on Signup',
            description: 'Some error occurred, please try again later',
            status: 'error',
            position: 'top-right',
            duration: 4000,
            isClosable: false,
          });
          break;
        default:
          toast({
            title: 'Error on Signup',
            description: 'Some error occurred, please try again later',
            status: 'error',
            position: 'top-right',
            duration: 4000,
            isClosable: false,
          });
          break;
      }
    } else {
      toast({
        title: 'Error on Login',
        description: SERVER_DOWN,
        status: 'error',
        position: 'top-right',
        duration: 4000,
        isClosable: true,
      });
    }
    signupMutation.reset();
  }

  // Loading indicator once request sent to server for signup
  if (isLoading) {
    return (
      <Flex
        bg='white'
        w='50%'
        h='100vh'
        justifyContent='center'
        alignItems='center'
      >
        <Stack align='center'>
          <Spinner color='teal' />
          <Text fontSize='md'>Signing you up!</Text>
        </Stack>
      </Flex>
    );
  }

  if (showPasswordPrompt) {
    return (
      <Flex
        bg='white'
        w='50%'
        h='100vh'
        justifyContent='center'
        alignItems='center'
      >
        <Stack align='center'>
          <InputGroup size='md'>
            <Input
              pr='4.5rem'
              type={show ? 'text' : 'password'}
              placeholder='Enter password'
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button colorScheme='teal' onClick={handleSignupClick}>
            Sign up
          </Button>
        </Stack>
      </Flex>
    );
  }

  return (
    <Flex
      bg='white'
      w='50%'
      h='100vh'
      justifyContent='center'
      alignItems='center'
    >
      <Stack align='center'>
        <Flex alignItems='center'>
          <Image boxSize='50px' src={grupoLogoTeal} alt='Waiting for room' />
          <Text fontSize='4xl' fontWeight='bold' color='#008080'>
            grupo
          </Text>
        </Flex>
        <Text fontSize='2xl'>Sign up for Grupo</Text>
        <GithubAuth text='Sign up with GitHub' getAuthData={getAuthData} />
        <Text fontSize='sm'>
          Already have a account{' '}
          <Link onClick={() => history.push('/login')}>Login now!</Link>
        </Text>
      </Stack>
    </Flex>
  );
};

export default SignupRightSection;
