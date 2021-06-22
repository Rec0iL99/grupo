import React from 'react';
import { Flex, Text, Icon } from '@chakra-ui/react';
import { AiOutlineArrowRight, AiOutlineCloseCircle } from 'react-icons/ai';

const RoomAlert = ({ username, action }) => (
  <Flex
    marginTop='16px'
    justifyContent='center'
    alignItems='center'
    padding='5px'
    _hover={{ bg: '#e3e6e8' }}
    transition='0.3s'
  >
    <Text fontSize='sm'>{username} joined the room</Text>
    <Icon
      as={action === 'joined-room' ? AiOutlineArrowRight : AiOutlineCloseCircle}
      w={4}
      h={4}
      color='teal'
      marginLeft='5px'
    />
  </Flex>
);

export default RoomAlert;
