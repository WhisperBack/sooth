'use client';

import { VStack, SimpleGrid, Box, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const features = [
  {
    title: 'Whisper Freely',
    description: 'Speak openly and without judgment. Sooth listens with presence and calm.',
  },
  {
    title: 'Gentle Reflections',
    description: 'Receive thoughtful, AI-powered reflections to help you process and understand.',
  },
  {
    title: 'Clarity in Seconds',
    description: 'Let your voice clear the mental fog — one breath, one reflection, one moment at a time.',
  },
];

export default function Features() {
  return (
    <VStack spacing={16} py={{ base: 20, md: 28 }} px={{ base: 6, md: 12 }}>
      <Heading
        size="2xl"
        textAlign="center"
        bgGradient="linear(to-r, blue.200, purple.300, pink.300)"
        bgClip="text"
        textShadow="0 0 16px rgba(255, 255, 255, 0.1)"
      >
        What Sooth Offers
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} w="full" maxW="6xl">
        {features.map((feature, i) => (
          <MotionBox
            key={i}
            p={6}
            rounded="2xl"
            bg="whiteAlpha.50"
            backdropFilter="blur(20px)"
            border="1px solid rgba(255,255,255,0.05)"
            boxShadow="0 0 24px rgba(0,0,0,0.2)"
            textAlign="center"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <Heading size="lg" mb={3} color="whiteAlpha.900">
              {feature.title}
            </Heading>
            <Text fontSize="md" color="whiteAlpha.800">
              {feature.description}
            </Text>
          </MotionBox>
        ))}
      </SimpleGrid>
    </VStack>
  );
}
