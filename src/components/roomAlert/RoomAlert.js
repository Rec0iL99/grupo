import React from 'react';
import { Flex, Text, Icon } from '@chakra-ui/react';
import { AiOutlineArrowRight, AiOutlineCloseCircle } from 'react-icons/ai';

const RoomAlert = ({ text, username, type }) => {
  return (
    <Flex marginTop='16px' justifyContent='center' alignItems='center'>
      <Text fontSize='sm'>Rec0iL joined the server</Text>
      <Icon
        as={AiOutlineArrowRight}
        w={4}
        h={4}
        color='teal'
        marginLeft='5px'
      />
    </Flex>
  );
};

export default RoomAlert;
