import React from 'react';
import { Flex, Avatar, Text, Stack } from '@chakra-ui/react';

const RoomChatBubble = ({
  name,
  username,
  profilePic,
  profileLink,
  chatMessage,
  timeOfMessage,
}) => {
  // User clicks on profile pic
  const handleProfilePicClick = () => {
    window.open(profileLink, '_blank');
  };

  return (
    <Flex
      alignItems='center'
      marginTop='16px'
      _hover={{ bg: '#e3e6e8' }}
      transition='0.3s'
    >
      <Avatar
        src={profilePic}
        size='sm'
        onClick={handleProfilePicClick}
        cursor='pointer'
      />
      <Stack marginLeft='13px'>
        <Flex>
          <Text fontSize='sm' fontWeight='bold'>
            {name}
          </Text>
          <Text fontSize='sm' marginLeft='5px'>
            @{username}
          </Text>
          <Text fontSize='sm' marginLeft='5px'>
            {timeOfMessage}
          </Text>
        </Flex>
        <Text fontSize='sm'>{chatMessage}</Text>
      </Stack>
    </Flex>
  );
};

export default RoomChatBubble;
