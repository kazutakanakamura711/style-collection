import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Button, HStack, Icon, useDisclosure } from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import { MenuModal } from './MenuModal';
import { CodeModal } from '../elements/CodeModal';
import { useLocation } from 'react-router-dom';
import { RoutePathType, parseRoutePathType } from '@/types/routePath';

export const Header = () => {
  const location = useLocation();
  const initialRoute =
    parseRoutePathType(location.pathname) || RoutePathType.Home;
  const [selectedMenu, setSelectedMenu] = useState<RoutePathType>(initialRoute);

  const menuModal = useDisclosure();
  const codeModal = useDisclosure();

  const handleMenuSelect = useCallback(
    (menu: RoutePathType) => {
      setSelectedMenu(menu);
      menuModal.onClose();
    },
    [menuModal, setSelectedMenu],
  );

  return (
    <>
      <Box
        w="100vw"
        color="gray.800"
        p={4}
        className="pointer-events-auto"
        position="fixed"
        zIndex={10}
      >
        <HStack
          as="nav"
          alignItems="center"
          justifyContent="space-between"
          gap={4}
        >
          <HStack gap={8}>
            <Box
              onClick={menuModal.onOpen}
              cursor="pointer"
              _hover={{ opacity: 0.5 }}
            >
              <Icon as={HamburgerIcon} w={8} h={8} />
            </Box>
            <Box as="h1">Style Collection</Box>
          </HStack>
          <Button onClick={codeModal.onOpen}>Code</Button>
        </HStack>
      </Box>

      <MenuModal
        isOpen={menuModal.isOpen}
        onClose={menuModal.onClose}
        onSelect={handleMenuSelect}
      />
      <CodeModal
        isOpen={codeModal.isOpen}
        onClose={codeModal.onClose}
        selectedMenu={selectedMenu}
      />
    </>
  );
};
