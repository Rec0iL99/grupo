import React from 'react';
import { Flex, Image } from '@chakra-ui/react';
import homeCharacter from '../../assets/homeCharacter.svg';

const LoginLeftSection = () => (
  <Flex bg='teal' w='50%' h='100vh' justifyContent='center' alignItems='center'>
    <Image src={homeCharacter} alt='character' boxSize='250px' />
  </Flex>
);

export default LoginLeftSection;
