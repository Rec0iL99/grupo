import React from 'react';
import { Flex } from '@chakra-ui/react';
import HomeLeftSection from './HomeLeftSection';
import HomeRightSection from './HomeRightSection';

const Home = () => {
  return (
    <Flex>
      <HomeLeftSection />
      <HomeRightSection />
    </Flex>
  );
};

export default Home;
