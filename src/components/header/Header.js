import React from 'react';
import { Flex, Heading, Image } from '@chakra-ui/react';
import grupoLogo from '../../assets/grupoLogo.svg';

const Header = (props) => {
  return (
    <Flex
      as='nav'
      justifyContent='center'
      wrap='wrap'
      width='5%'
      bg='teal'
      color='white'
      {...props}
    >
      <Flex marginTop='10px'>
        <Image boxSize='45px' objectFit='cover' src={grupoLogo} alt='Grupo' />
      </Flex>
    </Flex>
  );
};

export default Header;
