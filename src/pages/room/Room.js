import React, { useEffect, useState } from 'react';
import RoomSelectSection from './RoomSelectSection';
import Header from '../../components/header/Header';
import { Flex } from '@chakra-ui/react';
import { connectToSocketServer } from '../../actions/socketActions';
import {
  createRoom,
  joinRoom,
  newRoomMember,
  newRoomMessage,
  sendRoomChatMessage,
} from '../../actions/roomActions';
import { connect } from 'react-redux';
import SelectedRoom from './SelectedRoom';

const Room = ({
  socketData,
  roomData,
  createRoom,
  joinRoom,
  newRoomMember,
  newRoomMessage,
  sendRoomChatMessage,
  connectToSocketServer,
}) => {
  const socket = socketData.socket;

  // Initializing intial room
  const [selectedRoom, setSelectedRoom] = useState(
    Object.keys(roomData.rooms)[0]
  );
  // Connect to socket server
  useEffect(() => {
    connectToSocketServer();
  }, [connectToSocketServer]);

  // Initializing newRoomMember listener
  useEffect(() => {
    if (socket !== null) {
      newRoomMember(socket);
    }
  }, [socket, newRoomMember]);

  // Initializing newRoomMessage listener
  useEffect(() => {
    if (socket !== null) {
      newRoomMessage(socket);
    }
  }, [socket, newRoomMessage]);

  // Handle create room from roomSelectSection
  const handleCreateRoom = (roomName) => {
    createRoom(socket, roomName);
  };

  // Handle join room from roomSelectSection
  const handleJoinRoom = (roomCode) => {
    joinRoom(socket, roomCode);
  };

  // Handle send chat message when user presses enter key
  const handleSendChatMessage = (data) => {
    sendRoomChatMessage(socket, data.roomName, data.chatMessage);
  };

  // Handle onClick when user clicks on roomCard
  const handleRoomSelected = (roomName) => {
    setSelectedRoom(roomName);
  };

  return (
    <Flex>
      <Header />
      <RoomSelectSection
        rooms={roomData.rooms}
        sendCreateRoomRequest={handleCreateRoom}
        sendJoinRoomRequest={handleJoinRoom}
        sendRoomSelectedRequest={handleRoomSelected}
      />
      <SelectedRoom
        numberOfRooms={Object.keys(roomData.rooms).length}
        roomName={selectedRoom}
        roomMessageArray={
          roomData.rooms[selectedRoom]
            ? roomData.rooms[selectedRoom].messages
            : null
        }
        roomMembersArray={
          roomData.rooms[selectedRoom]
            ? roomData.rooms[selectedRoom].members
            : null
        }
        sendChatMessageRequest={handleSendChatMessage}
      />
    </Flex>
  );
};

const mapStateToProps = (state) => ({
  socketData: state.socketData,
  roomData: state.roomData,
});

export default connect(mapStateToProps, {
  connectToSocketServer,
  createRoom,
  joinRoom,
  newRoomMember,
  newRoomMessage,
  sendRoomChatMessage,
})(Room);
