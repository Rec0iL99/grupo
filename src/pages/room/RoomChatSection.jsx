import React, { useState } from 'react';
import { Flex, InputGroup, Input, Stack } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import RoomChatBubble from '../../components/roomChatBubble/RoomChatBubble';
import RoomAlert from '../../components/roomAlert/RoomAlert';

const RoomChatSection = (props) => {
  const { roomMessages, sendChatMessageRequest } = props;
  const [chatMessage, setChatMessage] = useState('');
  let roomChatCards = null;

  // Mapping room chat messages and room alerts
  if (roomMessages) {
    roomChatCards = roomMessages.map((roomMessage) => {
      /* eslint-disable no-else-return */
      if (roomMessage.type === 'room-chat-message') {
        return (
          <RoomChatBubble
            key={uuidv4()}
            name={roomMessage.name}
            username={roomMessage.username}
            profilePic={roomMessage.profilePic}
            profileLink={roomMessage.profileLink}
            timeOfMessage={roomMessage.timeOfMessage}
            chatMessage={roomMessage.chatMessage}
          />
        );
      } else if (roomMessage.type === 'room-alert-message') {
        return (
          <RoomAlert
            key={uuidv4()}
            action={roomMessage.action}
            username={roomMessage.username}
          />
        );
      } else {
        return null;
      }
    });
  }

  // Handle event when user presses enter key
  const handleChatInputKeyPressed = (event) => {
    if (event.key === 'Enter') {
      sendChatMessageRequest(event.target.value);
      setChatMessage('');
    }
  };

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
        <Input
          pr='4.5rem'
          placeholder='Message'
          value={chatMessage}
          onChange={(e) => setChatMessage(e.target.value)}
          onKeyPress={handleChatInputKeyPressed}
        />
      </InputGroup>
    </Flex>
  );
};

export default RoomChatSection;
