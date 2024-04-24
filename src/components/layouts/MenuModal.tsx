import {
  Link as ChakraLink,
  Modal,
  ModalContent,
  Grid,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FC } from 'react';
import { publicRoutes } from '@/routes/publicRoutes';
import { useGetScreenSizes } from '@/shared/hooks/useGetScreenSizes';
import { RoutePathType } from '@/types/routePath';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (menu: RoutePathType) => void;
}

export const MenuModal: FC<Props> = ({ isOpen, onClose, onSelect }) => {
  const { isSmallScreen, isMediumScreen } = useGetScreenSizes();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={isSmallScreen ? 'xs' : isMediumScreen ? 'md' : '2xl'}
    >
      <ModalOverlay
        backdropFilter="auto"
        backdropInvert="10%"
        backdropBlur="2px"
      />
      <ModalContent>
        <ModalHeader>Example Collection</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Grid
            templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
            gap={6}
            p={4}
          >
            {publicRoutes.map((route, index) => (
              <ChakraLink
                as={RouterLink}
                to={route.path}
                key={index}
                onClick={() => {
                  const label = route.path;
                  if (!label) return;
                  onSelect(label);
                }}
              >
                <Text>{route.label}</Text>
              </ChakraLink>
            ))}
          </Grid>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
