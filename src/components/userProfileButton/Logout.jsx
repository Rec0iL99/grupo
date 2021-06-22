import React from 'react';
import { Button, useToast } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { useHistory } from 'react-router-dom';
import { logoutUser } from '../../api/auth';
import { LOGOUT, ERROR, SERVER_DOWN } from '../../utils/constants';

const Logout = () => {
  const history = useHistory();
  const toast = useToast();

  const { data, error, isLoading, isSuccess, isError, refetch } = useQuery(
    'logout',
    () => logoutUser(history),
    {
      refetchOnWindowFocus: false,
      enabled: false,
    }
  );

  const handleLogout = () => {
    refetch();
  };

  if (isError) {
    if (error.response) {
      switch (error.response.data.payload.message) {
        case ERROR:
          toast({
            title: 'Error on Logout',
            description: "Couldn't logout, please try again later!",
            status: 'error',
            position: 'top-right',
            duration: 4000,
            isClosable: false,
          });
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
          break;
      }
    } else {
      toast({
        title: 'Error on Logout',
        description: SERVER_DOWN,
        status: 'error',
        position: 'top-right',
        duration: 4000,
        isClosable: true,
      });
    }
  }

  // When logout successfully
  if (isSuccess && data.payload.message === LOGOUT) {
    localStorage.removeItem('token');
    history.push('/login');
  }

  return (
    <Button
      colorScheme='red'
      variant='ghost'
      w='100%'
      onClick={handleLogout}
      isLoading={isLoading}
      loadingText='Logging out...'
    >
      Logout
    </Button>
  );
};

export default Logout;
