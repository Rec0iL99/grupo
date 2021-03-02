import React, { useEffect } from 'react';
import RoomSelectSection from './RoomSelectSection';
import RoomChatSection from './RoomChatSection';
import RoomMemberSection from './RoomMemberSection';
import Header from '../../components/header/Header';
import { Flex } from '@chakra-ui/react';
import { connectToSocketServer } from '../../actions/socketActions';
import { connect } from 'react-redux';

const Room = ({ connectToSocketServer }) => {
  useEffect(() => {
    connectToSocketServer();
  });

  return (
    <Flex>
      <Header />
      <RoomSelectSection />
      <RoomChatSection />
      <RoomMemberSection />
    </Flex>
  );
};

const mapStateToProps = (state) => ({
  userData: state.userData,
});

export default connect(mapStateToProps, { connectToSocketServer })(Room);
