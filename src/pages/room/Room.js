import React, { useEffect, useState } from 'react';
import RoomSelectSection from './RoomSelectSection';
import Header from '../../components/header/Header';
import { Flex } from '@chakra-ui/react';
import { connectToSocketServer } from '../../actions/socketActions';
import {
  createRoom,
  joinRoom,
  sendRoomChatMessage,
} from '../../actions/roomActions';
import { connect } from 'react-redux';
import getUserData from '../../utils/getUserData';
import SelectedRoom from './SelectedRoom';

const Room = ({
  socketData,
  roomData,
  createRoom,
  joinRoom,
  sendRoomChatMessage,
  connectToSocketServer,
}) => {
  const socket = socketData.socket;
  const username = getUserData().username;

  const [selectedRoom, setSelectedRoom] = useState(
    Object.keys(roomData.roomMessages)[0]
  );

  useEffect(() => {
    connectToSocketServer();
  }, [connectToSocketServer]);

  const handleCreateRoom = (roomName) => {
    createRoom(socket, roomName, username);
  };

  const handleJoinRoom = (roomCode) => {
    joinRoom(socket, roomCode, username);
  };

  const handleSendChatMessage = (data) => {
    sendRoomChatMessage(socket, data.roomName, username, data.chatMessage);
  };

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
        roomName={selectedRoom}
        roomMessageArray={roomData.roomMessages[selectedRoom]}
        roomMembersObject={
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
  sendRoomChatMessage,
})(Room);
