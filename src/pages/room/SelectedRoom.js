import React from 'react';
import { Flex } from '@chakra-ui/react';
import RoomChatSection from './RoomChatSection';
import RoomMemberSection from './RoomMemberSection';

const SelectedRoom = (props) => {
  const {
    numberOfRooms,
    roomName,
    roomMessageArray,
    roomMembersArray,
    sendChatMessageRequest,
  } = props;

  // Handle sending chat message to room.js through props
  const handleSendChatMessage = (chatMessage) => {
    const data = {
      chatMessage: chatMessage,
      roomName: roomName,
    };
    sendChatMessageRequest(data);
  };

  // Default content
  let content = (
    <Flex w='75%' h='100vh'>
      <RoomChatSection
        roomMessages={roomMessageArray}
        sendChatMessageRequest={handleSendChatMessage}
      />
      <RoomMemberSection roomMembers={roomMembersArray} />
    </Flex>
  );

  // If user has not joined any rooms then display nothing
  if (numberOfRooms === 0) {
    content = null;
  }

  return content;
};

export default SelectedRoom;
