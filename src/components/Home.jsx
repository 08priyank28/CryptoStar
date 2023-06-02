import React from "react";
import { Box, Image, Stack, Text, Heading, Container } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';
import img6 from '../assets/btc.png';

const Home = () => {
  return (
    <>
      <Box p={10}>
        <MyCarousel />
      </Box>
      <Container maxW={'container.xl'} minH={'100vh'} p="16" id="about">
        <Heading
          textTransform={'uppercase'}
          py="2"
          w={'fit-content'}
          borderBottom={'2px solid'}
          m="auto"
        >
          About Crypto
        </Heading>

        <Stack
          h="full"
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image
            src={img6}
            h={['40', '400']}
            transition={"all 1.1s"}
            css={{
              "&:hover": {
                transform: "scale(1.025)"
              }
            }} />

          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Cryptocurrency refers to digital or virtual currencies that utilize cryptography for secure and decentralized transactions. These currencies operate on a technology called blockchain, which ensures transparency, immutability, and resistance to fraud.<br /><br />
            Some popular cryptocurrencies include Bitcoin (BTC), Ethereum (ETH), Ripple (XRP), Litecoin (LTC), and many more. Each cryptocurrency functions on its own unique set of principles and technology, offering various features and use cases.
          </Text>
        </Stack>
      </Container>
    </>

  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1500}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w="full" h={'90vh'}>
      <Image src={img1} h="full" w={'90vw'} objectFit={'cover'} />
    </Box>
    <Box w="full" h={'90vh'}>
      <Image src={img2} h="full" w={'full'} objectFit={'cover'} />
    </Box>
    <Box w="full" h={'90vh'}>
      <Image src={img3} h="full" w={'full'} objectFit={'cover'} />
    </Box>
    <Box w="full" h={'90vh'}>
      <Image src={img4} h="full" w={'full'} objectFit={'cover'} />
    </Box>
    <Box w="full" h={'90vh'}>
      <Image src={img5} h="full" w={'full'} objectFit={'cover'} />
    </Box>
  </Carousel>
);

export default Home;
