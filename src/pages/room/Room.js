import React, { useEffect, useState } from 'react';
import RoomSelectSection from './RoomSelectSection';
import Header from '../../components/header/Header';
import { Flex, Spinner } from '@chakra-ui/react';
import { connectToSocketServer } from '../../actions/socketActions';
import { preCheckUser } from '../../actions/userActions';
import {
  createRoom,
  joinRoom,
  newRoomMember,
  newRoomMessage,
  sendRoomChatMessage,
} from '../../actions/roomActions';
import { connect } from 'react-redux';
import SelectedRoom from './SelectedRoom';
import { useHistory } from 'react-router-dom';

const Room = ({
  userData,
  socketData,
  roomData,
  createRoom,
  joinRoom,
  newRoomMember,
  newRoomMessage,
  sendRoomChatMessage,
  connectToSocketServer,
  preCheckUser,
}) => {
  const socket = socketData.socket;
  const history = useHistory();

  // Initializing intial room
  const [selectedRoom, setSelectedRoom] = useState(
    Object.keys(roomData.rooms)[0]
  );

  // Precheck before user sees anything
  useEffect(() => {
    if (localStorage.token) {
      preCheckUser(history);
    }
  }, [preCheckUser, history]);

  // Connect to socket server if precheck successfully and localStorage has accessToken
  useEffect(() => {
    if (localStorage.token) {
      connectToSocketServer();
    }
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

  // Default content
  let content = (
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

  if (userData.preCheckData.isLoading) {
    <Flex>
      <Spinner color='teal' />
    </Flex>;
  }

  return content;
};

const mapStateToProps = (state) => ({
  userData: state.userData,
  socketData: state.socketData,
  roomData: state.roomData,
});

export default connect(mapStateToProps, {
  preCheckUser,
  connectToSocketServer,
  createRoom,
  joinRoom,
  newRoomMember,
  newRoomMessage,
  sendRoomChatMessage,
})(Room);
