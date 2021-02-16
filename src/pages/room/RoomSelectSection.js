import React from 'react';
import { Button, Flex, InputGroup, Stack } from '@chakra-ui/react';
import { IoIosAddCircle } from 'react-icons/io';
import RoomCard from '../../components/roomCard/RoomCard';

const RoomSelectSection = () => {
  return (
    <Flex
      as='div'
      pos='relative'
      bg='white'
      w='25%'
      h='100vh'
      direction='column'
      padding='10px'
    >
      <Stack>
        <RoomCard roomName='CodeRoyale' />
        <RoomCard roomName='CodeRoyale' />
      </Stack>
      <InputGroup
        size='md'
        pos='absolute'
        bottom='0'
        left='0'
        padding='inherit'
      >
        <Button
          rightIcon={<IoIosAddCircle color='teal' />}
          colorScheme='teal'
          variant='outline'
          marginTop='10px'
          isFullWidth={true}
        >
          Add a Room
        </Button>
      </InputGroup>
    </Flex>
  );
};

export default RoomSelectSection;
