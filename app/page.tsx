'use client';

import Hero from '@/components/Section01_Hero';
import { Box, VStack, Heading, Text, SimpleGrid, Input, InputGroup, InputRightElement, Button, Spinner } from '@chakra-ui/react';
import { useState } from 'react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [recording, setRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');

  const startRecording = () => {
    setRecording(true);
    setTranscript('Listening...');
    setResponse('');

    setTimeout(() => {
      setTranscript('I’ve been feeling really overwhelmed this week.');
      setRecording(false);
      setResponse(
        'It’s okay to feel that way. Let’s take a breath together. You’re doing better than you think.'
      );
    }, 4000);
  };

  return (
    <Box as="main" bg="black" color="white">
      <Hero />

      {/* Features Section */}
      <VStack spacing={16} py={{ base: 20, md: 28 }} px={{ base: 6, md: 12 }} textAlign="center">
        <Heading
          size="2xl"
          bgGradient="linear(to-r, blue.200, purple.300, pink.300)"
          bgClip="text"
          textShadow="0 0 16px rgba(255, 255, 255, 0.1)"
        >
          What Sooth Offers
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} maxW="6xl" w="full">
          {[
            {
              title: 'Whisper Freely',
              desc: 'Speak openly without judgment. Sooth listens with calm presence.',
            },
            {
              title: 'Gentle Reflections',
              desc: 'Thoughtful AI-powered responses to help you reflect and grow.',
            },
            {
              title: 'Clarity in Seconds',
              desc: 'Let your voice clear the fog — one breath, one moment at a time.',
            },
          ].map((feature, i) => (
            <Box
              key={i}
              p={6}
              rounded="2xl"
              bg="whiteAlpha.50"
              backdropFilter="blur(20px)"
              border="1px solid rgba(255,255,255,0.05)"
              boxShadow="0 0 24px rgba(0,0,0,0.2)"
            >
              <Heading size="lg" mb={3} color="whiteAlpha.900">
                {feature.title}
              </Heading>
              <Text fontSize="md" color="whiteAlpha.800">
                {feature.desc}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>

      {/* Founder Note + Email */}
      <VStack spacing={10} py={{ base: 20, md: 28 }} px={{ base: 6, md: 12 }} textAlign="center">
        <Heading
          size="2xl"
          bgGradient="linear(to-r, blue.200, purple.300, pink.300)"
          bgClip="text"
          textShadow="0 0 16px rgba(255, 255, 255, 0.1)"
        >
          Get Early Access
        </Heading>

        <Text fontSize={{ base: 'lg', md: 'xl' }} color="whiteAlpha.800" maxW="2xl">
          Sooth was born from a deeply personal need — a way to feel heard, understood,
          and grounded. I&apos;m building this by hand so it can feel real to you, too.
        </Text>

        <Box maxW="lg" w="full">
          <InputGroup size="lg">
            <Input
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="filled"
              bg="whiteAlpha.100"
              _placeholder={{ color: 'whiteAlpha.600' }}
              color="whiteAlpha.900"
              borderRadius="xl"
            />
            <InputRightElement width="auto" mr={2}>
              <Button
                h="1.75rem"
                size="sm"
                colorScheme="purple"
                px={4}
                borderRadius="xl"
                onClick={() => alert(`You entered: ${email}`)}
              >
                Join
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>
      </VStack>

      {/* Embedded Demo Section */}
      <VStack spacing={12} py={24} px={6} textAlign="center">
        <Heading
          size="2xl"
          bgGradient="linear(to-r, blue.200, purple.300, pink.300)"
          bgClip="text"
          textShadow="0 0 18px rgba(255,255,255,0.15)"
        >
          Try Sooth Now
        </Heading>

        <MotionBox
          borderRadius="full"
          width={recording ? '100px' : '80px'}
          height={recording ? '100px' : '80px'}
          bgGradient="linear(to-r, blue.300, purple.300, pink.300)"
          animate={{ scale: recording ? [1, 1.1, 1] : 1 }}
          transition={{ duration: 1.2, repeat: Infinity }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
          onClick={startRecording}
          boxShadow="0 0 24px rgba(0,0,0,0.4)"
        >
          {recording ? <Spinner color="white" /> : <Text fontWeight="bold">Speak</Text>}
        </MotionBox>

        {transcript && (
          <Box maxW="lg">
            <Text fontSize="md" color="whiteAlpha.700">
              {transcript}
            </Text>
          </Box>
        )}

        {response && (
          <Box
            maxW="xl"
            p={6}
            bg="whiteAlpha.50"
            borderRadius="xl"
            backdropFilter="blur(10px)"
            border="1px solid rgba(255,255,255,0.05)"
          >
            <Text fontSize="lg" color="whiteAlpha.800">
              {response}
            </Text>
          </Box>
        )}
      </VStack>

      {/* Footer */}
      <VStack
        spacing={6}
        py={{ base: 16, md: 24 }}
        px={{ base: 6, md: 12 }}
        textAlign="center"
        bg="transparent"
      >
        <Text
          fontSize={{ base: 'lg', md: 'xl' }}
          color="whiteAlpha.700"
          fontStyle="italic"
          maxW="3xl"
        >
          &quot;Sooth is where your voice becomes feeling, your emotion finds expression, and your presence returns to peace.&quot;
        </Text>

        <Box pt={4}>
          <Text fontSize="sm" color="whiteAlpha.500">
            &copy; {new Date().getFullYear()} Sooth. All rights reserved.
          </Text>
        </Box>
      </VStack>
    </Box>
  );
}
