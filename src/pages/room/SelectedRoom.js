import React from 'react';
import { Flex, Image, Text } from '@chakra-ui/react';
import RoomChatSection from './RoomChatSection';
import RoomMemberSection from './RoomMemberSection';
import waitingForRoom from '../../assets/waitingForRoom.svg';

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

  // If user has joined rooms but has not selected a particular room
  if (numberOfRooms > 0 && roomName === undefined) {
    content = (
      <Flex
        w='75%'
        h='100vh'
        alignItems='center'
        justifyContent='center'
        flexDirection='column'
      >
        <Image boxSize='200px' src={waitingForRoom} alt='Waiting for room' />
        <Text fontSize='lg' fontWeight='bold'>
          Choose a room from the sidebar to interact with.
        </Text>
      </Flex>
    );
  }

  return content;
};

export default SelectedRoom;
