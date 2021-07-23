import {
  Modal as ChakraModal,
  ModalBody,
  ModalCloseButton,
  ModalContent, ModalHeader,
  ModalOverlay
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { useModal } from '../hooks/Modal';

type ModalProps = {
  title: string;
  children: ReactNode;
  size?: string;
}

export function Modal({
  title,
  children,
  size = "3xl",
}: ModalProps) {
  const { isOpen, onClose } = useModal();


  return (
    <ChakraModal
      isCentered
      onClose={onClose}
      isOpen={isOpen}
      motionPreset="slideInRight"
      size={size}
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalContent backgroundColor="gray.50">
        <ModalHeader color="#497173" >{title}</ModalHeader>
        <ModalCloseButton color="#497173" />
        <ModalBody 
          margin="0" 
          padding="0"
          overflowY="auto"
          css={{
            "&::-webkit-scrollbar": {
              width: "0.375rem",
              height: "0.375rem",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "rgba(0, 0, 0, 0.2)",
            },
          }}
        >
          {children}
        </ModalBody>
      </ModalContent>
    </ChakraModal>
  );
}