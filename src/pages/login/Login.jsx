import React from 'react';
import { Flex } from '@chakra-ui/react';
import LoginLeftSection from './LoginLeftSection';
import LoginRightSection from './LoginRightSection';

const Login = () => (
  <Flex>
    <LoginLeftSection />
    <LoginRightSection />
  </Flex>
);

export default Login;
