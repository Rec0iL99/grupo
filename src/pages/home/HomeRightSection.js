import React, { useState } from 'react';
import { Flex, Link, Stack, Text } from '@chakra-ui/react';
import GoogleAuth from '../../components/googleAuth/GoogleAuth';

const HomeRightSection = () => {
  const [signUpReq, setSignUpReq] = useState(false);

  const getAuthData = (authData) => {
    console.log(authData);
  };

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
        <Text fontSize='2xl'>Login to Grupo</Text>
        <GoogleAuth text='Login with Google' getAuthData={getAuthData} />
        <Text fontSize='sm'>
          Not a Grupo user yet?{' '}
          <Link
            onClick={() => {
              setSignUpReq(true);
            }}
          >
            Sign up now!
          </Link>
        </Text>
      </Stack>
    </Flex>
  );

  if (signUpReq) {
    content = (
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
            Already a Grupo user?{' '}
            <Link
              onClick={() => {
                setSignUpReq(false);
              }}
            >
              Login now!
            </Link>
          </Text>
        </Stack>
      </Flex>
    );
  }

  return content;
};

export default HomeRightSection;
