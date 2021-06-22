import React from 'react';
import { Stack, Heading } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import RoomMemberCard from '../../components/roomMemberCard/RoomMemberCard';

const RoomMemberSection = ({ roomMembers }) => {
  let roomOnlineMemberCards = null;
  let roomOfflineMemberCards = null;

  // Mapping room members
  if (roomMembers) {
    roomOnlineMemberCards = roomMembers.map((roomMember) => {
      /* eslint-disable no-else-return */
      if (roomMember.online) {
        return (
          <RoomMemberCard
            key={uuidv4()}
            username={roomMember.username}
            profilePic={roomMember.profilePic}
            profileLink={roomMember.profileLink}
            online={roomMember.online}
          />
        );
      } else {
        return null;
      }
    });
    roomOfflineMemberCards = roomMembers.map((roomMember) => {
      if (!roomMember.online) {
        return (
          <RoomMemberCard
            key={uuidv4()}
            username={roomMember.username}
            profilePic={roomMember.profilePic}
            profileLink={roomMember.profileLink}
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
