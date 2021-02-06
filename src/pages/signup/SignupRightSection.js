import React from 'react';
import { Flex, Link, Stack, Text, Spinner } from '@chakra-ui/react';
import GoogleAuth from '../../components/googleAuth/GoogleAuth';
import { useHistory } from 'react-router-dom';

const SignupRightSection = (props) => {
  const history = useHistory();

  // Function that's called once GoogleAuth passes authData
  const getAuthData = (authData) => {
    props.sendSignupRequest(authData);
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
        <Text fontSize='4xl' fontWeight='bold'>
          Grupo
        </Text>
        <Text fontSize='2xl'>Sign up for Grupo</Text>
        <GoogleAuth text='Sign up with Google' getAuthData={getAuthData} />
        <Text fontSize='sm'>
          Already have a account{' '}
          <Link onClick={() => history.push('/login')}>Login now!</Link>
        </Text>
      </Stack>
    </Flex>
  );

  // Loading indicator once request sent to server for signup
  if (props.signupLoading) {
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
          <Text fontSize='md'>Signing you up!</Text>
        </Stack>
      </Flex>
    );
  }

  return content;
};

export default SignupRightSection;
