import React from 'react';
import { Flex, Avatar, AvatarBadge, Text, Stack } from '@chakra-ui/react';

const RoomMemberCard = ({ firstName, lastName, username, profilePic }) => {
  return (
    <Flex margin='5px'>
      <Avatar size='sm' src='https://bit.ly/dan-abramov'>
        <AvatarBadge boxSize='0.9em' bg='green.500' />
      </Avatar>
      <Text marginLeft='10px' fontWeight='600'>
        joelmathewkoshy
      </Text>
    </Flex>
  );
};

export default RoomMemberCard;
