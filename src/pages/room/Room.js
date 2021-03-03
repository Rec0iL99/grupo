import React, { useEffect } from 'react';
import RoomSelectSection from './RoomSelectSection';
import RoomChatSection from './RoomChatSection';
import RoomMemberSection from './RoomMemberSection';
import Header from '../../components/header/Header';
import { Flex } from '@chakra-ui/react';
import { connectToSocketServer } from '../../actions/socketActions';
import { createRoom, joinRoom } from '../../actions/roomActions';
import { connect } from 'react-redux';
import getUserData from '../../utils/getUserData';

const Room = ({ socketData, createRoom, joinRoom, connectToSocketServer }) => {
  const socket = socketData.socket;
  const username = getUserData().username;

  useEffect(() => {
    connectToSocketServer();
  }, [connectToSocketServer]);

  const handleCreateRoom = (roomName) => {
    createRoom(socket, roomName, username);
  };

  const handleJoinRoom = (roomCode) => {
    joinRoom(socket, roomCode, username);
  };

  return (
    <Flex>
      <Header />
      <RoomSelectSection
        sendCreateRoomRequest={handleCreateRoom}
        sendJoinRoomRequest={handleJoinRoom}
      />
      <RoomChatSection />
      <RoomMemberSection />
    </Flex>
  );
};

const mapStateToProps = (state) => ({
  socketData: state.socketData,
});

export default connect(mapStateToProps, {
  connectToSocketServer,
  createRoom,
  joinRoom,
})(Room);
