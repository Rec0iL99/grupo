import React from 'react';
import { Flex, Image, Stack } from '@chakra-ui/react';
import grupoLogo from '../../assets/grupoLogo.svg';
import UserProfileButton from '../userProfileButton/UserProfileButton';

const Header = (props) => (
  <Flex
    as='nav'
    justifyContent='center'
    wrap='wrap'
    width='5%'
    bg='teal'
    /* eslint-disable react/jsx-props-no-spreading */
    {...props}
  >
    <Stack marginTop='10px' marginBottom='10px' justifyContent='space-between'>
      <Image boxSize='45px' objectFit='cover' src={grupoLogo} alt='Grupo' />
      <UserProfileButton />
    </Stack>
  </Flex>
);

export default Header;
