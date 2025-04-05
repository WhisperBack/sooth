'use client';

import { Heading, Text, VStack, Button, Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import NextLink from 'next/link';

const MotionText = motion(Text);
const MotionVStack = motion(VStack);
const MotionHeading = motion(Heading);
const MotionButton = motion(Button);

export default function ExperienceHeading() {
  return (
    <Box
      position="relative"
      minH="100vh"
      w="full"
      bgGradient="linear(to-b, #A8D5BA, #A9D1E8)"
      overflow="hidden"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        w: '100%',
        h: '100%',
        bg: 'radial-gradient(ellipse at top, rgba(255, 255, 255, 0.15), transparent 60%)',
        zIndex: 0
      }}
    >
      <MotionVStack
        spacing={10}
        textAlign="center"
        px={6}
        py={{ base: 28, md: 40 }}
        position="relative"
        zIndex={1}
      >
        <MotionHeading
          fontSize={{ base: '6xl', md: '8xl' }}
          fontWeight="extrabold"
          lineHeight="1.1"
        >
          <Box
            as="span"
            display="inline-block"
            bgGradient="linear(to-r, #D8BFD8, #A8D5BA, #A9D1E8)"
            bgClip="text"
            style={{ WebkitTextStroke: '0.8px rgba(255, 255, 255, 0.2)' }}
            textShadow="0 0 80px rgba(168, 225, 210, 0.3)"
          >
            Experience{' '}
          </Box>
          <Box
            as="span"
            display="inline-block"
            bgGradient="linear(to-r, #D8BFD8, #A9D1E8)"
            bgClip="text"
            fontWeight="extrabold"
            style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}
          >
            Sooth
          </Box>
        </MotionHeading>

        <MotionText
          fontSize={{ base: 'xl', md: '2xl' }}
          fontWeight="medium"
          color="#D8CFC4"
          textShadow="0 1px 6px rgba(168, 225, 210, 0.25)"
          maxW="2xl"
          mx="auto"
        >
          Your voice, your peace. Speak, and Sooth listens.
        </MotionText>

        <NextLink href="/demo" passHref>
          <MotionButton
            as="a"
            size="lg"
            px={10}
            py={6}
            fontSize="lg"
            fontWeight="bold"
            color="white"
            borderRadius="full"
            bgGradient="linear(to-r, #FAD0C9, #D8BFD8)"
            backdropFilter="blur(20px)"
            boxShadow="0 0 30px rgba(248, 192, 229, 0.25)"
            _hover={{
              bgGradient: 'linear(to-r, #D8BFD8, #A9D1E8)',
              boxShadow: '0 0 40px rgba(216, 191, 216, 0.5)'
            }}
          >
            Try the Demo
          </MotionButton>
        </NextLink>
      </MotionVStack>
    </Box>
  );
}
