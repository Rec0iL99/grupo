import React from 'react';
import { Flex } from '@chakra-ui/react';
import SignupLeftSection from './SignupLeftSection';
import SignupRightSection from './SignupRightSection';

const Signup = () => {
  return (
    <Flex>
      <SignupLeftSection />
      <SignupRightSection />
    </Flex>
  );
};

export default Signup;
