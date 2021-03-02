import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';

const CustomModal = (props) => {
  // Destructing the props object
  const {
    actionButtonText,
    buttonIcon,
    buttonText,
    getModalData,
    inputPlaceholder,
    modalHeaderText,
  } = props;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [inputText, setInputText] = useState('');

  const handleActionButtonClick = () => {
    getModalData(inputText);
    onClose();
  };

  return (
    <>
      <Button
        rightIcon={buttonIcon}
        bg='white'
        colorScheme='teal'
        variant='outline'
        marginTop='10px'
        isFullWidth={true}
        onClick={onOpen}
      >
        {buttonText}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{modalHeaderText}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              variant='filled'
              placeholder={inputPlaceholder}
              onChange={(e) => setInputText(e.target.value)}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='teal' mr={3} onClick={handleActionButtonClick}>
              {actionButtonText}
            </Button>
            <Button variant='ghost' onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CustomModal;
