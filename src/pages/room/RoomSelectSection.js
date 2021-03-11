import React from 'react';
import { Flex, InputGroup, Stack } from '@chakra-ui/react';
import RoomCard from '../../components/roomCard/RoomCard';
import CustomModal from '../../components/customModal/CustomModal';
import { IoIosAddCircle } from 'react-icons/io';
import { GiJoint } from 'react-icons/gi';

const RoomSelectSection = (props) => {
  const {
    rooms,
    sendCreateRoomRequest,
    sendJoinRoomRequest,
    sendRoomSelectedRequest,
  } = props;

  // Handle data passed from modal for create room
  const handleCreateRoomModalData = (data) => {
    sendCreateRoomRequest(data);
  };

  // Handle data passed from modal for join room
  const handleJoinRoomModalData = (data) => {
    sendJoinRoomRequest(data);
  };

  // Handle data of newly selected room from roomCard component
  const handleRoomSelected = (data) => {
    sendRoomSelectedRequest(data);
  };

  let roomCards = null;

  // Mapping all the rooms user joined
  if (rooms !== undefined) {
    roomCards = Object.keys(rooms).map((roomName, index) => {
      return (
        <RoomCard
          key={index}
          roomName={roomName}
          roomAvatarUrl={rooms[roomName].config.roomAvatar}
          roomSelected={handleRoomSelected}
        />
      );
    });
  }

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
      <Stack>{roomCards}</Stack>
      <InputGroup
        size='md'
        pos='absolute'
        bottom='0'
        left='0'
        padding='inherit'
      >
        <Stack w='100%'>
          <CustomModal
            buttonText='Join a room'
            buttonIcon={<GiJoint color='teal' />}
            modalHeaderText='Join a new room'
            inputPlaceholder='Room code'
            actionButtonText='Join room'
            getModalData={handleJoinRoomModalData}
          />
          <CustomModal
            buttonText='Add a room'
            buttonIcon={<IoIosAddCircle color='teal' />}
            modalHeaderText='Create a new room'
            inputPlaceholder='Room name'
            actionButtonText='Create room'
            getModalData={handleCreateRoomModalData}
          />
        </Stack>
      </InputGroup>
    </Flex>
  );
};

export default RoomSelectSection;
