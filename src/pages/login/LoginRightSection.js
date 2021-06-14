import React from 'react';
import {
  Flex,
  Link,
  Stack,
  Text,
  Spinner,
  Image,
  useToast,
} from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import grupoLogoTeal from '../../assets/grupoLogoTeal.svg';
import GithubAuth from '../../components/githubAuth/GithubAuth';
import { useMutation } from 'react-query';
import { loginUser } from '../../api/auth';
import {
  LOGIN,
  REGISTER,
  AUTHERROR,
  ERROR,
  INVALID,
  SERVER_DOWN,
} from '../../utils/constants';

const LoginRightSection = () => {
  const history = useHistory();
  const toast = useToast();
  const loginMutation = useMutation((loginData) => loginUser(loginData));
  const { data, error, isSuccess, isLoading, isError } = loginMutation;

  // Function that's called once Auth component passes authData
  const getAuthData = (authData) => {
    if (authData.issuer === 'github') {
      loginMutation.mutate({
        issuer: authData.issuer,
        accessCode: authData.accessCode,
      });
    }
  };

  // Login success handling
  if (isSuccess && data.payload.message === LOGIN) {
    loginMutation.reset();
    localStorage.token = data.payload.accessToken;
    history.push('/');
  }

  // Login error handling
  if (isError) {
    if (error.response) {
      switch (error.response.data.payload.message) {
        case REGISTER:
          toast({
            title: 'Error on Login',
            description: 'You will have to Sign Up first to use Grupo!',
            status: 'error',
            position: 'top-right',
            duration: 4000,
            isClosable: false,
          });
          history.push('/signup');
          break;
        case ERROR:
          toast({
            title: 'Error on Login',
            description: 'Some error occurred, we are working to fix it',
            status: 'error',
            position: 'top-right',
            duration: 4000,
            isClosable: false,
          });
          break;
        case AUTHERROR:
        case INVALID:
          toast({
            title: 'Error on Login',
            description: 'Some error occurred, please try again later',
            status: 'error',
            position: 'top-right',
            duration: 4000,
            isClosable: false,
          });
          break;
        default:
          toast({
            title: 'Error on Login',
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
    loginMutation.reset();
  }

  // Loading indicator once request sent to server for login
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
          <Text fontSize='md'>Logging you in!</Text>
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
        <Text fontSize='2xl'>Login to Grupo</Text>
        <GithubAuth text='Login with GitHub' getAuthData={getAuthData} />
        <Text fontSize='sm'>
          Not a Grupo user yet?{' '}
          <Link onClick={() => history.push('/signup')}>Sign up now!</Link>
        </Text>
      </Stack>
    </Flex>
  );
};

export default LoginRightSection;
