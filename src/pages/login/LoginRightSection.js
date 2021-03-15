import React from 'react';
import { Flex, Link, Stack, Text, Spinner, Image } from '@chakra-ui/react';
import GoogleAuth from '../../components/googleAuth/GoogleAuth';
import { useHistory } from 'react-router-dom';
import grupoLogoTeal from '../../assets/grupoLogoTeal.svg';
import GithubAuth from '../../components/githubAuth/GithubAuth';

const LoginRightSection = (props) => {
  const history = useHistory();
  // Function that's called once Auth component passes authData
  const getAuthData = (authData) => {
    props.sendLoginRequest(authData);
  };

  // Default content
  let content = (
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
        <GoogleAuth text='Login with Google' getAuthData={getAuthData} />
        <GithubAuth text='Login with GitHub' getAuthData={getAuthData} />
        <Text fontSize='sm'>
          Not a Grupo user yet?{' '}
          <Link onClick={() => history.push('/signup')}>Sign up now!</Link>
        </Text>
      </Stack>
    </Flex>
  );

  // Loading indicator once request sent to server for login
  if (props.loginLoading) {
    content = (
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

  return content;
};

export default LoginRightSection;
