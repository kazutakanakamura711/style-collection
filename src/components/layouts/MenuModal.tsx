import {
  Box,
  Link as ChakraLink,
  Modal,
  ModalContent,
  Grid,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FC } from 'react';
import { RouteLabelType, parseRouteLabelType } from '@/types/routeLabel';
import { publicRoutes } from '@/routes/publicRoutes';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (menu: RouteLabelType) => void;
}

export const MenuModal: FC<Props> = ({ isOpen, onClose, onSelect }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={'6xl'}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Example Collection</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box p={4}>
            <Grid templateColumns="repeat(3, 1fr)" gap={6} p={4}>
              {publicRoutes.map((route, index) => (
                <ChakraLink
                  as={RouterLink}
                  to={route.path}
                  key={index}
                  onClick={() => {
                    const label = parseRouteLabelType(route.label);
                    if (!label) return;
                    onSelect(label);
                  }}
                >
                  {route.label}
                </ChakraLink>
              ))}
            </Grid>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
