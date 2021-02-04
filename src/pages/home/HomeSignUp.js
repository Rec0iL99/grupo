import React from 'react';
import { Flex, Link, Stack, Text } from '@chakra-ui/react';
import GoogleAuth from '../../components/googleAuth/GoogleAuth';

const HomeSignUp = (props) => {
  const getAuthData = (authData) => {
    console.log(authData);
  };

  const onClickLogin = () => {
    props.loginRequested();
  };

  return (
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
          Already a Grupo user? <Link onClick={onClickLogin}>Login now!</Link>
        </Text>
      </Stack>
    </Flex>
  );
};

export default HomeSignUp;
