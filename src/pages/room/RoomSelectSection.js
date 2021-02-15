import React from 'react';
import { Button, Flex, Stack } from '@chakra-ui/react';
import { IoIosAddCircle } from 'react-icons/io';
import RoomCard from '../../components/roomCard/RoomCard';

const RoomSelectSection = () => {
  return (
    <Flex bg='white' w='25%' h='100vh' direction='column' padding='10px'>
      <Stack>
        <RoomCard roomName='CodeRoyale' />
        <RoomCard roomName='CodeRoyale' />
      </Stack>
      <Button
        rightIcon={<IoIosAddCircle color='teal' />}
        colorScheme='teal'
        variant='outline'
        marginTop='10px'
        isFullWidth={true}
      >
        Add a Room
      </Button>
    </Flex>
  );
};

export default RoomSelectSection;
