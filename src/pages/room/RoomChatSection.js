import React from 'react';
import { Flex, InputGroup, Input, Stack } from '@chakra-ui/react';
import RoomChatBubble from '../../components/roomChatBubble/RoomChatBubble';

const RoomChatSection = () => {
  return (
    <Flex
      as='div'
      pos='relative'
      bg='#F6F8FA'
      w='50%'
      h='100vh'
      flexDirection='column'
      paddingLeft='10px'
      paddingRight='10px'
      paddingBottom='10px'
    >
      <Stack>
        <RoomChatBubble />
        <RoomChatBubble />
      </Stack>
      <InputGroup
        size='md'
        pos='absolute'
        bottom='0'
        left='0'
        borderColor='teal'
        padding='inherit'
      >
        <Input pr='4.5rem' placeholder='Message' />
      </InputGroup>
    </Flex>
  );
};

export default RoomChatSection;
