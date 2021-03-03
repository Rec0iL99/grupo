import React from 'react';
import { Stack, Heading } from '@chakra-ui/react';
import RoomMemberCard from '../../components/roomMemberCard/RoomMemberCard';

const RoomMemberSection = ({ roomMembers }) => {
  let roomOnlineMemberCards = null;
  let roomOfflineMemberCards = null;

  let roomMembersArray = roomMembers;

  if (roomMembersArray !== undefined) {
    roomOnlineMemberCards = roomMembersArray.map((item, index) => {
      if (item.online) {
        return (
          <RoomMemberCard
            key={index}
            username={item.username}
            profilePic={item.profilePic}
            online={item.online}
          />
        );
      }
    });

    roomOfflineMemberCards = roomMembersArray.map((item, index) => {
      if (!item.online) {
        return (
          <RoomMemberCard
            key={index}
            username={item.username}
            profilePic={item.profilePic}
            online={item.online}
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
