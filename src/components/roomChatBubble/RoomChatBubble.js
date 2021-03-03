import React from 'react';
import { Flex, Avatar, Text, Stack } from '@chakra-ui/react';

const RoomChatBubble = ({
  firstname,
  lastname,
  username,
  profilePic,
  chatMessage,
  timeOfMessage,
}) => {
  return (
    <Flex
      alignItems='center'
      marginTop='16px'
      _hover={{ bg: '#e3e6e8' }}
      transition='0.3s'
    >
      <Avatar src={profilePic} size='sm' />
      <Stack marginLeft='13px'>
        <Flex>
          <Text fontSize='sm' fontWeight='bold'>
            {firstname} {lastname}
          </Text>
          <Text fontSize='sm' marginLeft='5px'>
            @{username}
          </Text>
          <Text fontSize='sm' marginLeft='5px'>
            {timeOfMessage}
          </Text>
        </Flex>
        <Text fontSize='sm'>{chatMessage}</Text>
      </Stack>
    </Flex>
  );
};

export default RoomChatBubble;
