import React, { useEffect } from 'react';
import RoomSelectSection from './RoomSelectSection';
import RoomChatSection from './RoomChatSection';
import RoomMemberSection from './RoomMemberSection';
import Header from '../../components/header/Header';
import { Flex } from '@chakra-ui/react';
import { connectToSocketServer } from '../../actions/socketActions';
import { createRoom } from '../../actions/roomActions';
import { connect } from 'react-redux';
import getUserData from '../../utils/getUserData';

const Room = ({ socketData, createRoom, connectToSocketServer }) => {
  const socket = socketData.socket;

  useEffect(() => {
    connectToSocketServer();
  }, [connectToSocketServer]);

  const handleCreateRoom = (roomName) => {
    const username = getUserData().username;

    createRoom(socket, roomName, username);
  };

  return (
    <Flex>
      <Header />
      <RoomSelectSection sendCreateRoomRequest={handleCreateRoom} />
      <RoomChatSection />
      <RoomMemberSection />
    </Flex>
  );
};

const mapStateToProps = (state) => ({
  socketData: state.socketData,
});

export default connect(mapStateToProps, { connectToSocketServer, createRoom })(
  Room
);
