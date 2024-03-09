import { Box, Container, Image, Spacer, Text, VStack } from '@chakra-ui/react';

const description = [
  {
    title: '使用する技術',
    text: 'React、TypeScript、ChakraUIを使用します。',
  },
  {
    title: '特徴',
    text: 'コピペで簡単に使えるようにしています。レスポンシブ対応しています。(多分)',
  },
  {
    title: '使い方',
    text: 'ハンバーガーメニューから使いたいものを選択しコードボタンを押してコピーして使います。',
  },
];

export const Home = () => {
  return (
    <Box mb={10}>
      <Spacer h={20} />
      <Container maxW="3xl" centerContent>
        <Image src="/public/images/img-top.jpg" alt="home画面の画像" />
      </Container>
      <Spacer h={16} />
      <Container maxW="3xl" centerContent>
        <Box as="h2" fontSize="lg" mb={8} textAlign="center">
          **自分用のスタイル集**
        </Box>
        <VStack align="start" gap={4}>
          {description.map((desc, index) => (
            <Box key={index}>
              <Box as="h3">{desc.title}</Box>
              <Text>{desc.text}</Text>
            </Box>
          ))}
        </VStack>
      </Container>
    </Box>
  );
};
