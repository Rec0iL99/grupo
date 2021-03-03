import React from 'react';
import { Flex, InputGroup, Input, Stack } from '@chakra-ui/react';
import RoomChatBubble from '../../components/roomChatBubble/RoomChatBubble';
import RoomAlert from '../../components/roomAlert/RoomAlert';

const RoomChatSection = ({ roomMessages }) => {
  let roomChatCards = null;

  let roomMessageArray = roomMessages;

  if (roomMessageArray !== undefined) {
    roomChatCards = roomMessageArray.map((item, index) => {
      if (item.type === 'room-chat-message') {
        return (
          <RoomChatBubble
            key={index}
            firstname={item.firstname}
            lastname={item.lastname}
            username={item.username}
            profilePic={item.profilePic}
            timeOfMessage={item.timeOfMessage}
            chatMessage={item.chatMessage}
          />
        );
      } else if (item.type === 'room-alert-message') {
        return <RoomAlert key={index} username={item.username} />;
      }
    });
  }

  return (
    <Flex
      as='div'
      pos='relative'
      bg='#F6F8FA'
      w='70%'
      h='100vh'
      flexDirection='column-reverse'
      paddingLeft='10px'
      paddingRight='10px'
      paddingBottom='10px'
    >
      <Stack marginBottom='50px' overflow='auto'>
        {roomChatCards}
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
