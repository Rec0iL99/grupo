import React, { useState } from 'react';
import {
  Button,
  Flex,
  InputGroup,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
} from '@chakra-ui/react';
import { IoIosAddCircle } from 'react-icons/io';
import RoomCard from '../../components/roomCard/RoomCard';
import { useDisclosure } from '@chakra-ui/react';

const RoomSelectSection = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [roomName, setRoomName] = useState('');

  const handleCreateRoom = () => {
    props.sendCreateRoomRequest(roomName);
    onClose();
  };

  return (
    <Flex
      as='div'
      pos='relative'
      bg='#66b2b2'
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
          bg='white'
          colorScheme='teal'
          variant='outline'
          marginTop='10px'
          isFullWidth={true}
          onClick={onOpen}
        >
          Add a Room
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create a new room</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Input
                variant='filled'
                placeholder='Room name'
                onChange={(e) => setRoomName(e.target.value)}
              />
            </ModalBody>

            <ModalFooter>
              <Button colorScheme='teal' mr={3} onClick={handleCreateRoom}>
                Create room
              </Button>
              <Button variant='ghost' onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </InputGroup>
    </Flex>
  );
};

export default RoomSelectSection;
