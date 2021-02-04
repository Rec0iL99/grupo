import React from 'react';
import { Flex } from '@chakra-ui/react';
import HomeLeftSection from './HomeLeftSection';
import HomeRightSection from './HomeRightSection';
import { loginUser, userActionReset } from '../../actions/userActions';
import { connect } from 'react-redux';

const Home = ({ userData, loginUser, userActionReset }) => {
  const sendLoginRequest = (authData) => {
    loginUser(authData);
  };

  return (
    <Flex>
      <HomeLeftSection />
      <HomeRightSection
        loginLoading={userData.loginData.isLoading}
        sendLoginRequest={sendLoginRequest}
      />
    </Flex>
  );
};

const mapStateToProps = (state) => ({
  userData: state.userData,
});

export default connect(mapStateToProps, { loginUser, userActionReset })(Home);
