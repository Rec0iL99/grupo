import React, { useEffect } from 'react';
import { Image } from '@chakra-ui/react';
import getUserData from '../../utils/getUserData';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverCloseButton,
  Button,
  Text,
  Flex,
  useToast,
} from '@chakra-ui/react';
import { connect } from 'react-redux';
import { logoutUser, userActionReset } from '../../actions/userActions';
import { useHistory } from 'react-router-dom';
import { LOGOUT, ERROR } from '../../utils/constants';

const UserProfileButton = ({ logoutUser, userActionReset, userData }) => {
  const user = getUserData();
  const history = useHistory();
  const toast = useToast();

  // Handle logout button click
  const handleLogout = () => {
    logoutUser(history);
  };

  // Logout user error handling
  useEffect(() => {
    if (
      userData.logoutData.error &&
      userData.logoutData.error.payload !== undefined
    ) {
      switch (userData.logoutData.error) {
        case ERROR:
          toast({
            title: 'Error on Logout',
            description: "Couldn't logout, please try again later!",
            status: 'error',
            position: 'top-right',
            duration: 4000,
            isClosable: false,
          });
          userActionReset();
          break;
        default:
          toast({
            title: 'Error on Logout',
            description: "Couldn't logout, please try again later!",
            status: 'error',
            position: 'top-right',
            duration: 4000,
            isClosable: false,
          });
          userActionReset();
          break;
      }
    } else if (userData.logoutData.error) {
      toast({
        title: 'Error on Logout',
        description: userData.logoutData.error,
        status: 'error',
        position: 'top-right',
        duration: 4000,
        isClosable: false,
      });
      userActionReset();
    }
  }, [userData.logoutData.error, toast, userActionReset]);

  // When logout is successfull
  useEffect(() => {
    if (userData.logoutData.data) {
      if (userData.logoutData.data.payload.message === LOGOUT) {
        userActionReset();
        localStorage.removeItem('token');
        history.push('/');
      }
    }
  }, [userData.logoutData.data, userActionReset, history]);

  return (
    <Popover>
      <PopoverTrigger>
        <Image
          cursor='pointer'
          borderRadius='full'
          boxSize='45px'
          src={user.profilePic}
          alt={user.username}
        ></Image>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverCloseButton />
        <PopoverHeader fontWeight='semibold' fontSize='lg'>
          {user.name}
          <Text fontSize='sm'>{user.email}</Text>
        </PopoverHeader>
        <PopoverBody>
          <Flex>
            <Text>Logged in as</Text>
            <Text marginLeft='5px' fontWeight='bold'>
              {user.username}
            </Text>
          </Flex>
          <Button colorScheme='teal' variant='ghost' w='100%'>
            Settings
          </Button>
          <Button
            colorScheme='red'
            variant='ghost'
            w='100%'
            onClick={handleLogout}
          >
            Logout
          </Button>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

const mapStateToProps = (state) => ({
  userData: state.userData,
});

export default connect(mapStateToProps, { logoutUser, userActionReset })(
  UserProfileButton
);
