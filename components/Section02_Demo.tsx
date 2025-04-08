'use client';

import Section01_Hero from './Section01_Hero';
import { Box, Text, VStack } from '@chakra-ui/react';

export default function Home() {
  return (
    <>
      <Section01_Hero />

      <VStack spacing={10} py={12} px={6} textAlign="center">
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
    </>
  );
}
