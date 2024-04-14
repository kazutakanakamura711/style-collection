import { useMediaQuery } from '@chakra-ui/react';
import { breakpoints } from '../utils/breakpoints';

export const useGetScreenSizes = () => {
  const [isSmallScreen] = useMediaQuery(`(max-width: ${breakpoints.sm})`);
  const [isMediumScreen] = useMediaQuery(
    `(min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg})`,
  );

  return {
    isSmallScreen,
    isMediumScreen,
  };
};
