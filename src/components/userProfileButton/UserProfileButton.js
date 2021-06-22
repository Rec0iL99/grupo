import React from 'react';
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
} from '@chakra-ui/react';
import Logout from './Logout';

const UserProfileButton = () => {
  const user = getUserData();

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
          <Logout />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default UserProfileButton;
