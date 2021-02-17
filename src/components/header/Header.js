import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';

const Header = (props) => {
  return (
    <Flex
      as='nav'
      align='center'
      justify='space-between'
      wrap='wrap'
      // padding='1rem'
      width='5%'
      bg='teal'
      color='white'
      {...props}
    >
      <Flex align='center' mr={5}>
        <Heading as='h1' size='lg' letterSpacing={'-.1rem'}>
          Grupo
        </Heading>
      </Flex>
    </Flex>
  );
};

export default Header;
