import { codeStringMap } from '@/codeStrings';
import { RoutePathType } from '@/types/routePath';
import {
  Code,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { FC } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  selectedMenu: RoutePathType;
}

export const CodeModal: FC<Props> = ({ isOpen, onClose, selectedMenu }) => {
  const codeString = codeStringMap[selectedMenu];
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Example Collection</ModalHeader>
        <ModalCloseButton />
        <ModalBody overflowY="auto" maxHeight="80vh">
          <Code whiteSpace="pre-wrap">{codeString}</Code>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
