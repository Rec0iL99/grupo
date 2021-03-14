import React, { useState } from 'react';
import { Icon } from '@chakra-ui/icon';
import { IoPersonAddSharp } from 'react-icons/io5';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Tooltip,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';

const InviteMembers = ({ roomCode, roomName }) => {
  const [copied, setCopied] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Handle click for copy button
  const handleClick = () => {
    // Copying roomCode to clipboard
    navigator.clipboard.writeText(roomCode);
    setCopied(true);

    // Stop showing copied tooltip after 2 seconds
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <>
      <Icon as={IoPersonAddSharp} w={4} h={4} onClick={onOpen} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Invite other members to {roomName}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <InputGroup size='md'>
              <Input pr='4.5rem' value={roomCode} readOnly />
              <InputRightElement width='4.5rem'>
                <Tooltip label='Copied' aria-label='A tooltip' isOpen={copied}>
                  <Button h='1.75rem' size='sm' onClick={handleClick}>
                    Copy
                  </Button>
                </Tooltip>
              </InputRightElement>
            </InputGroup>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default InviteMembers;
