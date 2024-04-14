export const textShadow3d = `
import { text } from '@/shared/utils/sampleConst';
import { Box } from '@chakra-ui/react';

export const TextShadow3d = () => {
  return (
    <Box
      bg="red.500"
      display="grid"
      placeItems="center"
      w="full"
      h="calc(100vh - 72px)"
    >
      <Box
        as="h2"
        fontSize={64}
        fontWeight="bold"
        textAlign="center"
        color="red.400"
        textShadow="0px 8px 4px #890000,0 -1px 1px #f9cece"
        letterSpacing={4}
      >
        {text}
      </Box>
    </Box>
  );
};
`;
