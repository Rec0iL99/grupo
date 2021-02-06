import React, { useEffect } from 'react';
import { Flex, useToast } from '@chakra-ui/react';
import SignupLeftSection from './SignupLeftSection';
import SignupRightSection from './SignupRightSection';
import { signupUser, userActionReset } from '../../actions/userActions';
import { connect } from 'react-redux';
import {
  ERROR,
  CONFLICT,
  CREATED,
  MISSING,
  ERRORTOKEN,
} from '../../utils/constants';
import { useHistory } from 'react-router-dom';

const Signup = ({ userData, signupUser, userActionReset }) => {
  const toast = useToast();
  const history = useHistory();

  // Function for calling action that logs in user
  const sendSignupRequest = (authData) => {
    signupUser(authData);
  };

  // Check if user registered successfully
  useEffect(() => {
    if (userData.signupData.data) {
      if (userData.signupData.data.payload.message === CREATED) {
        toast({
          title: 'Sign up was a success!',
          description:
            'Welcome to Grupo! Login to chat with the dev community!',
          status: 'success',
          position: 'top-right',
          duration: 4000,
          isClosable: false,
        });
        userActionReset();
        history.push('/login');
      }
    }
  }, [userData.signupData.data, history, userActionReset, toast]);

  // Sign up error handling
  useEffect(() => {
    if (
      userData.signupData.error &&
      userData.signupData.error.payload !== undefined
    ) {
      switch (userData.signupData.error.payload.message) {
        case CONFLICT:
          toast({
            title: 'Error on Signup',
            description: 'You have already registered! Login to use Grupo',
            status: 'error',
            position: 'top-right',
            duration: 4000,
            isClosable: false,
          });
          history.push('/login');
          userActionReset();
          break;
        case MISSING:
        case ERROR:
        case ERRORTOKEN:
          toast({
            title: 'Error on Signup',
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
            title: 'Error on Signup',
            description: 'Some error occurred, please try again later',
            status: 'error',
            position: 'top-right',
            duration: 4000,
            isClosable: false,
          });
          userActionReset();
          break;
      }
    } else if (userData.signupData.error) {
      toast({
        title: 'Error on Signup',
        description: userData.signupData.error,
        status: 'error',
        position: 'top-right',
        duration: 4000,
        isClosable: false,
      });
      userActionReset();
    }
  }, [userData.signupData.error, userActionReset, history, toast]);

  return (
    <Flex>
      <SignupLeftSection />
      <SignupRightSection
        signupLoading={userData.signupData.isLoading}
        sendSignupRequest={sendSignupRequest}
      />
    </Flex>
  );
};

const mapStateToProps = (state) => ({
  userData: state.userData,
});

export default connect(mapStateToProps, { signupUser, userActionReset })(
  Signup
);
