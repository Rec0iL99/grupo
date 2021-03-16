import React from 'react';
import { Flex, Avatar, AvatarBadge, Text } from '@chakra-ui/react';

const RoomMemberCard = ({ username, profilePic, profileLink, online }) => {
  // Navigate to user profile
  const handleOnClick = () => {
    window.open(profileLink, '_blank');
  };

  return (
    <Flex margin='5px' cursor='pointer' onClick={handleOnClick}>
      <Avatar size='sm' src={profilePic}>
        <AvatarBadge boxSize='0.9em' bg={online ? 'teal' : 'gray.500'} />
      </Avatar>
      <Text marginLeft='10px' fontWeight='600'>
        {username}
      </Text>
    </Flex>
  );
};

export default RoomMemberCard;
