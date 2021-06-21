import React, { useEffect, useState } from 'react';
import RoomSelectSection from './RoomSelectSection';
import Header from '../../components/header/Header';
import { Flex, Spinner } from '@chakra-ui/react';
import { connectToSocketServer } from '../../actions/socketActions';
import { preCheckUser } from '../../actions/userActions';
import {
  newRoomMember,
  newRoomMessage,
  sendRoomChatMessage,
} from '../../actions/roomActions';
import { connect } from 'react-redux';
import SelectedRoom from './SelectedRoom';
import { socketConnection } from '../../service/socket';
import useSocket from '../../global-stores/useSocket';
import useRooms from '../../global-stores/useRooms';
import { createRoom, joinRoom } from '../../service/roomSocket';

const Room = ({
  userData,
  socketData,
  roomData,
  newRoomMember,
  newRoomMessage,
  sendRoomChatMessage,
  connectToSocketServer,
  preCheckUser,
}) => {
  const socket = useSocket((state) => state.socket);
  const setSocket = useSocket((state) => state.setSocket);
  const setRooms = useRooms((state) => state.setRooms);

  // Initializing intial room
  const [selectedRoom, setSelectedRoom] = useState(
    Object.keys(roomData.rooms)[0]
  );

  // Precheck before user sees anything
  // useEffect(() => {
  //   if (localStorage.token) {
  //     preCheckUser(history);
  //   }
  // }, [preCheckUser, history]);

  // Connect to socket server if precheck successfully and localStorage has accessToken
  useEffect(() => {
    if (localStorage.token) {
      socketConnection((error, data) => {
        if (data) {
          setSocket(data.socket);
        }
      });
    }
  }, [setSocket]);

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
    createRoom(socket, roomName, (error, data) => {
      setRooms(data);
    });
  };

  // Handle join room from roomSelectSection
  const handleJoinRoom = (roomCode) => {
    joinRoom(socket, roomCode, (error, data) => {
      setRooms(data);
    });
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
  newRoomMember,
  newRoomMessage,
  sendRoomChatMessage,
})(Room);
