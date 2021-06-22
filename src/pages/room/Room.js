import React, { useEffect, useState } from 'react';
import RoomSelectSection from './RoomSelectSection';
import Header from '../../components/header/Header';
import { Flex } from '@chakra-ui/react';
import SelectedRoom from './SelectedRoom';
import { socketConnection } from '../../service/socket';
import useSocket from '../../global-stores/useSocket';
import useRooms from '../../global-stores/useRooms';
import {
  createRoom,
  joinRoom,
  sendRoomChatMessage,
  roomMemberListener,
  roomMessageListener,
} from '../../service/roomSocket';

const Room = () => {
  const socket = useSocket((state) => state.socket);
  const rooms = useRooms((state) => state.rooms);
  const setSocket = useSocket((state) => state.setSocket);
  const setRooms = useRooms((state) => state.setRooms);
  const setRoomMessages = useRooms((state) => state.setRoomMessages);
  const setRoomMembers = useRooms((state) => state.setRoomMembers);

  // Initializing intial room
  const [selectedRoom, setSelectedRoom] = useState(Object.keys(rooms)[0]);

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

  // Initializing room member and message listeners
  useEffect(() => {
    roomMemberListener(socket, (error, data) => {
      const { roomName, member } = data;
      setRoomMembers(roomName, member);
    });
    roomMessageListener(socket, (error, data) => {
      const { roomName, roomMessage } = data;
      setRoomMessages(roomName, roomMessage);
    });
  }, [setRoomMembers, setRoomMessages, socket]);

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
    const { roomName, chatMessage } = data;

    sendRoomChatMessage(socket, roomName, chatMessage, (error, data) => {
      setRoomMessages(roomName, data);
    });
  };

  // Handle onClick when user clicks on roomCard
  const handleRoomSelected = (roomName) => {
    setSelectedRoom(roomName);
  };

  // if (userData.preCheckData.isLoading) {
  //   return (
  //     <Flex>
  //       <Spinner color='teal' />
  //     </Flex>
  //   );
  // }

  return (
    <Flex>
      <Header />
      <RoomSelectSection
        rooms={rooms}
        sendCreateRoomRequest={handleCreateRoom}
        sendJoinRoomRequest={handleJoinRoom}
        sendRoomSelectedRequest={handleRoomSelected}
      />
      <SelectedRoom
        numberOfRooms={Object.keys(rooms).length}
        roomName={selectedRoom}
        roomMessageArray={
          rooms[selectedRoom] ? rooms[selectedRoom].messages : null
        }
        roomMembersArray={
          rooms[selectedRoom] ? rooms[selectedRoom].members : null
        }
        sendChatMessageRequest={handleSendChatMessage}
      />
    </Flex>
  );
};

export default Room;
