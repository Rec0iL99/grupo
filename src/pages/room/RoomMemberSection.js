import React from 'react';
import { Stack, Heading } from '@chakra-ui/react';
import RoomMemberCard from '../../components/roomMemberCard/RoomMemberCard';

const RoomMemberSection = ({ roomMembers }) => {
  let roomOnlineMemberCards = null;
  let roomOfflineMemberCards = null;

  if (roomMembers) {
    roomOnlineMemberCards = roomMembers.map((roomMember, index) => {
      if (roomMember.online) {
        return (
          <RoomMemberCard
            key={index}
            username={roomMember.username}
            profilePic={roomMember.profilePic}
            online={roomMember.online}
          />
        );
      } else {
        return null;
      }
    });
    roomOfflineMemberCards = roomMembers.map((roomMember, index) => {
      if (!roomMember.online) {
        return (
          <RoomMemberCard
            key={index}
            username={roomMember.username}
            profilePic={roomMember.profilePic}
            online={roomMember.online}
          />
        );
      } else {
        return null;
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
