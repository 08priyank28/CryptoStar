import React from "react";
import {
  Avatar,
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { AiOutlineSend } from 'react-icons/ai';
import img from "../assets/me.jpg"

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p="16" color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} justifyContent={"center"} w={'full'} px={'4'}>
          <Heading
            size="md"
            textTransform={'uppercase'}
            textAlign={['center', 'left']}
          >
            Subscribe to get updates
          </Heading>
          <HStack
            borderBottom={'2px solid white'} py="2"
          >
            <Input
              placeholder="Enter Email Here..."
              border={'none'}
              borderRadius="none"
              outline={'none'}
              focusBorderColor="none"
            />
            <Button
              p={'0'}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>

        <VStack
          cursor={"pointer"}
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
          justifyContent={"center"}
          textAlign={"center"}
        >
          <Heading textAlign={'center'}>
            CryptoStars
          </Heading>
          <Text>All Rights Reserved @2023</Text>
        </VStack>

        <VStack w={'full'} cursor={"pointer"}>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={img} transition={"all 0.9s"} css={{
            "&:hover": {
              transform: "scale(1.025)"
            }
          }} />
          <Text>Our Founder</Text>
          <Text size={"lg"}>Priyank Pandit</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
