import React, { useState, useEffect } from 'react';
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
} from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import grupoLogoTeal from '../../assets/grupoLogoTeal.svg';
import GithubAuth from '../../components/githubAuth/GithubAuth';

const SignupRightSection = (props) => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
  const [password, setPassword] = useState('');
  const [authData, setAuthData] = useState({});
  const [sendSignupRequest, setSendSignupRequest] = useState(false);
  const history = useHistory();

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
    setSendSignupRequest(true);
  };

  // Make the signup request to API
  useEffect(() => {
    if (sendSignupRequest) {
      props.sendSignupRequest(authData);
      setSendSignupRequest(false);
    }
  }, [sendSignupRequest, authData, props]);

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
        <Text fontSize='2xl'>Sign up for Grupo</Text>
        <GithubAuth text='Sign up with GitHub' getAuthData={getAuthData} />
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

  if (showPasswordPrompt) {
    content = (
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

  return content;
};

export default SignupRightSection;
