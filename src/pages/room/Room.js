import React, { useEffect, useState } from 'react';
import RoomSelectSection from './RoomSelectSection';
import Header from '../../components/header/Header';
import { Flex } from '@chakra-ui/react';
import { connectToSocketServer } from '../../actions/socketActions';
import { createRoom, joinRoom } from '../../actions/roomActions';
import { connect } from 'react-redux';
import getUserData from '../../utils/getUserData';
import SelectedRoom from './SelectedRoom';

const Room = ({ socketData, createRoom, joinRoom, connectToSocketServer }) => {
  const socket = socketData.socket;
  const username = getUserData().username;

  // For testing
  const roomMessageData = {
    CodeRoyale: [
      {
        type: 'room-chat-message',
        username: 'joelmathew',
        firstname: 'Joel',
        lastname: 'Mathew',
        profilePic: 'https://bit.ly/dan-abramov',
        timeOfMessage: 'Jan 25 at 22:47',
        chatMessage: 'Hola Amigos!',
      },
      {
        type: 'room-alert-message',
        username: 'joelmathew',
      },
    ],
    Grupo: [
      {
        type: 'room-chat-message',
        username: 'alnhenry',
        firstname: 'Alan',
        lastname: 'Henry',
        profilePic: 'https://bit.ly/dan-abramov',
        timeOfMessage: 'Jan 25 at 10:47',
        chatMessage: 'yo yo yo',
      },
      {
        type: 'room-chat-message',
        username: 'alnhenry',
        firstname: 'Alan',
        lastname: 'Henry',
        profilePic: 'https://bit.ly/dan-abramov',
        timeOfMessage: 'Jan 25 at 10:47',
        chatMessage: 'Chillin in goa with my peeps',
      },
      {
        type: 'room-alert-message',
        username: 'alanhenry',
      },
    ],
  };

  const roomMembersData = {
    CodeRoyale: [
      {
        username: 'joelmathew',
        profilePic: 'https://bit.ly/dan-abramov',
        online: true,
      },
      {
        username: 'alanhenry',
        profilePic: 'https://bit.ly/dan-abramov',
        online: false,
      },
    ],
    Grupo: [
      {
        username: 'justinmathew',
        profilePic: 'https://bit.ly/dan-abramov',
        online: true,
      },
      {
        username: 'naveensreevalsan',
        profilePic: 'https://bit.ly/dan-abramov',
        online: true,
      },
      {
        username: 'donald',
        profilePic: 'https://bit.ly/dan-abramov',
        online: false,
      },
      {
        username: 'sachinvilas',
        profilePic: 'https://bit.ly/dan-abramov',
        online: true,
      },
    ],
  };

  const [selectedRoom, setSelectedRoom] = useState(
    Object.keys(roomMessageData)[0]
  );

  useEffect(() => {
    // connectToSocketServer();
  }, [connectToSocketServer]);

  const handleCreateRoom = (roomName) => {
    createRoom(socket, roomName, username);
  };

  const handleJoinRoom = (roomCode) => {
    joinRoom(socket, roomCode, username);
  };

  const handleRoomSelected = (roomName) => {
    setSelectedRoom(roomName);
  };

  return (
    <Flex>
      <Header />
      <RoomSelectSection
        sendCreateRoomRequest={handleCreateRoom}
        sendJoinRoomRequest={handleJoinRoom}
        sendRoomSelectedRequest={handleRoomSelected}
      />
      <SelectedRoom
        roomMessageArray={roomMessageData[selectedRoom]}
        roomMembersArray={roomMembersData[selectedRoom]}
      />
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
