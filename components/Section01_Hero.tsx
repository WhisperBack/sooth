// Section01_Hero.tsx

'use client';

import { VStack, Box, Heading, Text, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Global } from '@emotion/react';

const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const ScrollbarStyles = () => (
  <Global
    styles={`
      html, body {
        overflow-x: hidden;
      }
      ::-webkit-scrollbar {
        width: 16px;
        background: transparent;
      }
      ::-webkit-scrollbar-track {
        background: transparent;
      }
      ::-webkit-scrollbar-thumb {
        background: linear-gradient(to bottom, var(--chakra-colors-blue-200), var(--chakra-colors-purple-300), var(--chakra-colors-pink-200));
        border-radius: 999px;
        background-size: 300% 300%;
        animation: drift 20s ease-in-out infinite;
        transition: background 0.3s ease;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: rgba(144, 205, 244, 0.5);
      }
      * {
        scrollbar-width: auto;
        scrollbar-color: linear-gradient(to right, var(--chakra-colors-blue-200), var(--chakra-colors-purple-300), var(--chakra-colors-pink-200)) transparent;
      }
      @keyframes drift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `}
  />
);

export default function Hero() {
  return (
    <>
      <ScrollbarStyles />

      <VStack
        spacing={8}
        minH="100vh"
        align="center"
        justify="center"
        textAlign="center"
        px={6}
        py={24}
        position="relative"
      >
        <MotionHeading
          size="4xl"
          bgGradient="linear(to-r, blue.200, purple.300, pink.300)"
          bgClip="text"
          textShadow="0 0 12px rgba(255,255,255,0.15)"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          Experience Sooth
        </MotionHeading>

        <MotionText
          fontSize={{ base: 'xl', md: '2xl' }}
          color="whiteAlpha.800"
          maxW="lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.2, ease: 'easeOut' }}
        >
          Your voice. Your peace. Just speak — Sooth will listen.
        </MotionText>

        <Box as={Link} href="/demo" passHref>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              size="lg"
              borderRadius="full"
              px={8}
              py={6}
              fontSize="xl"
              fontWeight="bold"
              color="white"
              bgGradient="linear(to-r, blue.300, purple.300, pink.300)"
              backgroundSize="300% 300%"
              animation="drift 18s ease-in-out infinite"
              boxShadow="0 4px 20px rgba(0,0,0,0.25)"
              _hover={{ transform: 'scale(1.05)' }}
            >
              Try the Demo
            </Button>
          </motion.div>
        </Box>
      </VStack>
    </>
  );
}