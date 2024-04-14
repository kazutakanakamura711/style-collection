export const textBackgroundVideoCode = `
import { text, videoUrl } from '@/shared/utils/sampleConst';
import { Box, Text } from '@chakra-ui/react';

export const TextBackgroundVideo = () => {
  return (
    <Box
      position="absolute"
      w="100%"
      h="calc(100vh - 72px)"
      display="grid"
      placeItems="center"
      overflow="hidden"
    >
      <Box
        as="video"
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        objectFit="cover"
        controls
        playsInline
        autoPlay
        muted
        loop
      >
        <source src={videoUrl} type="video/mp4" />
      </Box>
      <Text
        as="h1"
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="full"
        bg="white"
        fontSize="16vw"
        textAlign="center"
        lineHeight="100vh"
        fontFamily="'Impact'"
        mixBlendMode="screen"
        letterSpacing="1.1vw"
        color="black"
      >
        {text}
      </Text>
    </Box>
  );
};
`;
