import React from 'react';
import { Flex, Avatar, Text, Stack } from '@chakra-ui/react';

const RoomChatBubble = ({
  firstName,
  lastName,
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
      <Avatar src='https://bit.ly/dan-abramov' size='sm' />
      <Stack marginLeft='13px'>
        <Flex>
          <Text fontSize='sm' fontWeight='bold'>
            Joel Mathew
          </Text>
          <Text fontSize='sm' marginLeft='5px'>
            @joelmathewkoshy
          </Text>
          <Text fontSize='sm' marginLeft='5px'>
            Jan 25 22:47
          </Text>
        </Flex>
        <Text fontSize='sm'>
          Hola Amigos!
          Wassupasdasdabsdjkbaksdbbdajbsdjabsdjabsjdbakjsdbaksbdkabsdkjabsdkabksdbaksbdakb
        </Text>
      </Stack>
    </Flex>
  );
};

export default RoomChatBubble;
