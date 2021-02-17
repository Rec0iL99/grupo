import React from 'react';
import RoomSelectSection from './RoomSelectSection';
import RoomChatSection from './RoomChatSection';
import RoomMemberSection from './RoomMemberSection';
import Header from '../../components/header/Header';
import { Flex } from '@chakra-ui/react';

const Room = () => {
  return (
    <Flex>
      <Header />
      <RoomSelectSection />
      <RoomChatSection />
      <RoomMemberSection />
    </Flex>
  );
};

export default Room;
