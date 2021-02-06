import React, { useEffect } from 'react';
import { Flex, useToast } from '@chakra-ui/react';
import LoginLeftSection from './LoginLeftSection';
import LoginRightSection from './LoginRightSection';
import { loginUser, userActionReset } from '../../actions/userActions';
import { connect } from 'react-redux';
import {
  LOGIN,
  REGISTER,
  AUTHERROR,
  ERROR,
  INVALID,
} from '../../utils/constants';
import { useHistory } from 'react-router-dom';

const Login = ({ userData, loginUser, userActionReset }) => {
  const toast = useToast();
  const history = useHistory();

  // Function for calling action that logs in user
  const sendLoginRequest = (authData) => {
    loginUser(authData);
  };

  // Checking if user logged in successfully
  useEffect(() => {
    if (userData.loginData.data) {
      if (userData.loginData.data.payload.message === LOGIN) {
        history.push('/');
      }
    }
  }, [userData.loginData.data, history]);

  // Login error handling
  useEffect(() => {
    if (
      userData.loginData.error &&
      userData.loginData.error.payload !== undefined
    ) {
      switch (userData.loginData.error.payload.message) {
        case REGISTER:
          toast({
            title: 'Error on Login',
            description: 'You will have to Sign Up first to use CodeRoyale!',
            status: 'error',
            position: 'top-right',
            duration: 4000,
            isClosable: false,
          });
          history.push('/signup');
          userActionReset();
          break;
        case ERROR:
          toast({
            title: 'Error on Login',
            description: 'Some error occurred, we are working to fix it',
            status: 'error',
            position: 'top-right',
            duration: 4000,
            isClosable: false,
          });
          userActionReset();
          break;
        case AUTHERROR:
        case INVALID:
          toast({
            title: 'Error on Login',
            description: 'Some error occurred, please try again later',
            status: 'error',
            position: 'top-right',
            duration: 4000,
            isClosable: false,
          });
          userActionReset();
          break;
        default:
          toast({
            title: 'Error on Login',
            description: 'Some error occurred, please try again later',
            status: 'error',
            position: 'top-right',
            duration: 4000,
            isClosable: false,
          });
          userActionReset();
          break;
      }
    } else if (userData.loginData.error) {
      toast({
        title: 'Error on Login',
        description: userData.loginData.error,
        status: 'error',
        position: 'top-right',
        duration: 4000,
        isClosable: false,
      });
      userActionReset();
    }
  }, [userData.loginData.error, userActionReset, history, toast]);

  return (
    <Flex>
      <LoginLeftSection />
      <LoginRightSection
        loginLoading={userData.loginData.isLoading}
        sendLoginRequest={sendLoginRequest}
      />
    </Flex>
  );
};

const mapStateToProps = (state) => ({
  userData: state.userData,
});

export default connect(mapStateToProps, { loginUser, userActionReset })(Login);
