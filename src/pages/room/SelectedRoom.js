import React from 'react';
import { Flex } from '@chakra-ui/react';
import RoomChatSection from './RoomChatSection';
import RoomMemberSection from './RoomMemberSection';

const SelectedRoom = () => {
  // For testing
  const roomMessageArray = [
    {
      type: 'room-chat-message',
      username: 'joelmathew',
      firstname: 'Joel',
      lastname: 'Mathew',
      profilePic: 'https://bit.ly/dan-abramov',
      timeOfMessage: 'Jan 25 at 22:47',
      chatMessage: 'Hola Amigos!',
    },
    {
      type: 'room-alert-message',
      username: 'alanhenry',
    },
  ];

  return (
    <Flex w='75%' h='100vh'>
      <RoomChatSection roomMessages={roomMessageArray} />
      <RoomMemberSection />
    </Flex>
  );
};

export default SelectedRoom;
