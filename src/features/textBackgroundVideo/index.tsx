import { Box, Text } from '@chakra-ui/react';

const text = 'SampleText';

export const TextBackgroundVideo = () => {
  return (
    <Box
      position="absolute"
      w="100%"
      h="100vh"
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
        autoPlay
        muted
        loop
      >
        <source
          src="https://www.w3schools.com/howto/rain.mp4"
          type="video/mp4"
        />
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
