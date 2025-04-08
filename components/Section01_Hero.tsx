'use client';

import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

export default function Hero() {
  return (
    <Box as="section" bg="black" color="white" pt={{ base: 20, md: 32 }} pb={{ base: 24, md: 36 }} px={6} textAlign="center">
      <VStack spacing={8} justifyContent="center">
        <Heading
          size="3xl"
          bgGradient="linear(to-r, blue.300, purple.400, pink.300)"
          bgClip="text"
          textShadow="0 0 16px rgba(255, 255, 255, 0.1)"
        >
          Your voice. Your peace. Just speak — Sooth will listen.
        </Heading>

        <MotionBox
          borderRadius="full"
          width="100px"
          height="100px"
          bgGradient="linear(to-r, blue.300, purple.400, pink.300)"
          animation="pulse 2s ease-in-out infinite"
          display="flex"
          alignItems="center"
          justifyContent="center"
          boxShadow="0 0 24px rgba(255,255,255,0.15)"
          mx="auto"
        >
          <Text fontSize="3xl" fontWeight="bold" color="white">
            🎙️
          </Text>
        </MotionBox>

        <Box maxW="xl">
          <Text fontSize="md" color="whiteAlpha.700">
            I’ve been feeling kind of lost lately, like I’m drifting and don’t know how to ground myself.
          </Text>
        </Box>

        <Box
          maxW="2xl"
          p={6}
          bg="whiteAlpha.50"
          borderRadius="xl"
          backdropFilter="blur(10px)"
          border="1px solid rgba(255,255,255,0.05)"
        >
          <Text fontSize="lg" color="whiteAlpha.800">
            That’s okay. Let’s pause together. You are not alone in this moment, and peace is already on its way.
          </Text>
        </Box>
      </VStack>
    </Box>
  );
}