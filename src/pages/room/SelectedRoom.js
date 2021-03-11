import React from 'react';
import { Flex } from '@chakra-ui/react';
import RoomChatSection from './RoomChatSection';
import RoomMemberSection from './RoomMemberSection';

const SelectedRoom = (props) => {
  const {
    roomName,
    roomMessageArray,
    roomMembersArray,
    sendChatMessageRequest,
  } = props;

  const handleSendChatMessage = (chatMessage) => {
    const data = {
      chatMessage: chatMessage,
      roomName: roomName,
    };
    sendChatMessageRequest(data);
  };

  return (
    <Flex w='75%' h='100vh'>
      <RoomChatSection
        roomMessages={roomMessageArray}
        sendChatMessageRequest={handleSendChatMessage}
      />
      <RoomMemberSection roomMembers={roomMembersArray} />
    </Flex>
  );
};

export default SelectedRoom;
