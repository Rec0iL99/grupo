import React from 'react';
import { Stack, Heading } from '@chakra-ui/react';
import RoomMemberCard from '../../components/roomMemberCard/RoomMemberCard';

const RoomMemberSection = ({ roomMembers }) => {
  let roomOnlineMemberCards = null;
  let roomOfflineMemberCards = null;

  if (roomMembers) {
    roomOnlineMemberCards = Object.keys(roomMembers).map((key, index) => {
      if (roomMembers[key].online) {
        return (
          <RoomMemberCard
            key={index}
            username={roomMembers[key].username}
            profilePic={roomMembers[key].profilePic}
            online={roomMembers[key].online}
          />
        );
      }
    });
    roomOfflineMemberCards = Object.keys(roomMembers).map((key, index) => {
      if (!roomMembers[key].online) {
        return (
          <RoomMemberCard
            key={index}
            username={roomMembers[key].username}
            profilePic={roomMembers[key].profilePic}
            online={roomMembers[key].online}
          />
        );
      }
    });
  }

  return (
    <Stack bg='white' w='25%' h='100vh' padding='10px'>
      <Stack>
        <Heading fontSize='md'>Online</Heading>
        {roomOnlineMemberCards}
      </Stack>
      <Stack>
        <Heading fontSize='md'>Offline</Heading>
        {roomOfflineMemberCards}
      </Stack>
    </Stack>
  );
};

export default RoomMemberSection;
