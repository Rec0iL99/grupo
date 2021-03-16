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

const UserProfileButton = () => {
  const userData = getUserData();

  return (
    <Popover>
      <PopoverTrigger>
        <Image
          cursor='pointer'
          borderRadius='full'
          boxSize='45px'
          src={userData.profilePic}
          alt={userData.username}
        ></Image>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverCloseButton />
        <PopoverHeader fontWeight='semibold' fontSize='lg'>
          {userData.name}
          <Text fontSize='sm'>{userData.email}</Text>
        </PopoverHeader>
        <PopoverBody>
          <Flex>
            <Text>Logged in as</Text>
            <Text marginLeft='5px' fontWeight='bold'>
              {userData.username}
            </Text>
          </Flex>
          <Button colorScheme='teal' variant='ghost' w='100%'>
            Settings
          </Button>
          <Button colorScheme='red' variant='ghost' w='100%'>
            Logout
          </Button>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default UserProfileButton;
