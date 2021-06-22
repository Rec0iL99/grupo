import React from 'react';
import { Flex } from '@chakra-ui/react';
import SignupLeftSection from './SignupLeftSection';
import SignupRightSection from './SignupRightSection';

const Signup = () => (
  <Flex>
    <SignupLeftSection />
    <SignupRightSection />
  </Flex>
);

export default Signup;
