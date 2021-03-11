import React from 'react';
import { Avatar, Text, Box } from '@chakra-ui/react';

const RoomCard = (props) => {
  // Destructing the props object
  const { roomName, roomAvatarUrl, roomSelected } = props;

  // Handle onClick when user clicks on the card component
  const handleOnClick = () => {
    roomSelected(roomName);
  };

  return (
    <Box
      as='div'
      cursor='pointer'
      display='flex'
      alignItems='center'
      height='50px'
      lineHeight='1.2'
      transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
      border='1px'
      px='8px'
      borderRadius='1px'
      fontSize='16px'
      fontWeight='semibold'
      bg='#f5f6f7'
      borderColor='#ccd0d5'
      color='#4b4f56'
      overflow='hidden'
      _hover={{ bg: '#ebedf0' }}
      _active={{
        bg: '#dddfe2',
        transform: 'scale(0.98)',
        borderColor: '#bec3c9',
      }}
      _focus={{
        boxShadow:
          '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
      }}
      onClick={handleOnClick}
    >
      <Avatar name={roomName} src={roomAvatarUrl} size='sm' />
      <Text fontSize='md' marginLeft='7px'>
        {roomName}
      </Text>
    </Box>
  );
};

export default RoomCard;
