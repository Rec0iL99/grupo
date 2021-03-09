import React from 'react';
import { Flex } from '@chakra-ui/react';
import RoomChatSection from './RoomChatSection';
import RoomMemberSection from './RoomMemberSection';

const SelectedRoom = (props) => {
  const {
    roomName,
    roomMessageArray,
    roomMembersObject,
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
      <RoomMemberSection roomMembers={roomMembersObject} />
    </Flex>
  );
};

export default SelectedRoom;
