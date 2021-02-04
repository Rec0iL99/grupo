import React from 'react';
import { Flex, Image } from '@chakra-ui/react';
import image from '../../assets/homeCharacter.svg';

const HomeLeftSection = () => {
  return (
    <Flex
      bg='teal'
      w='50%'
      h='100vh'
      justifyContent='center'
      alignItems='center'
    >
      <Image src={image} alt='character' boxSize='250px' />
    </Flex>
  );
};

export default HomeLeftSection;
