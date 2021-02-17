import React from 'react';
import { Stack, Heading } from '@chakra-ui/react';
import RoomMemberCard from '../../components/roomMemberCard/RoomMemberCard';

const RoomMemberSection = () => {
  return (
    <Stack bg='white' w='25%' h='100vh' padding='10px'>
      <Stack>
        <Heading fontSize='md'>Online</Heading>
        <RoomMemberCard />
        <RoomMemberCard />
      </Stack>
      <Stack>
        <Heading fontSize='md'>Offline</Heading>
        <RoomMemberCard />
      </Stack>
    </Stack>
  );
};

export default RoomMemberSection;
