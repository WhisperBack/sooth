'use client';

import { Heading, Text, VStack, Button, Box, Flex, Link as ChakraLink } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import NextLink from 'next/link';
import { Global } from '@emotion/react';

const MotionText = motion(Text);
const MotionVStack = motion(VStack);
const MotionHeading = motion(Heading);
const MotionButton = motion(Button);

const ScrollbarStyles = () => (
  <Global
    styles={`
      ::-webkit-scrollbar {
        width: 10px;
      }
      ::-webkit-scrollbar-track {
        background: transparent;
      }
      ::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.2);
        border-radius: 8px;
        backdrop-filter: blur(6px);
      }
      ::-webkit-scrollbar-thumb:hover {
        background: rgba(255, 255, 255, 0.4);
      }
      * {
        scrollbar-width: thin;
        scrollbar-color: rgba(255,255,255,0.2) transparent;
      }
    `}
  />
);

export default function ExperienceHeading() {
  return (
    <>
      <ScrollbarStyles />

      {/* Sticky Top Navigation */}
      <Box position="sticky" top={0} zIndex={10} width="100%" px={{ base: 4, md: 8 }}>
        <Flex justify="center">
          <Flex as="nav" bg="rgba(0, 0, 0, 0.2)" backdropFilter="blur(20px)" borderRadius="3xl"
            px={{ base: 4, md: 12 }}
            py={4}
            gap={6}
            justify="center"
            wrap="wrap"
            width="100%"
            border="1px solid rgba(255, 255, 255, 0.1)"
          >
            {['about', 'demo', 'privacy', 'terms', 'how-it-works', 'contact'].map((route, i) => (
              <NextLink key={i} href={`/${route}`} passHref>
                <ChakraLink color="whiteAlpha.900" _hover={{ color: 'white' }} fontWeight="semibold" fontSize={{ base: 'sm', md: 'md' }} letterSpacing="tight">
                  {route.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </ChakraLink>
              </NextLink>
            ))}
          </Flex>
        </Flex>
      </Box>

      <MotionVStack spacing={12} textAlign="center" py={{ base: 28, md: 40 }}>
        <MotionHeading
          as="h1"
          fontSize={{ base: '6xl', md: '8xl' }}
          fontWeight="extrabold"
          lineHeight="1.1"
          display="inline-block"
        >
          <Box
            as="span"
            display="inline-block"
            sx={{
              bgGradient: 'linear(to-r, purple.300, pink.200)',
              bgClip: 'text',
              color: 'transparent',
              fontWeight: 'extrabold',
              position: 'relative',
              WebkitTextStroke: '1px white'
            }}
          >
            Experience{' '}
          </Box>
          <Box
            as="span"
            display="inline-block"
            sx={{
              bgGradient: 'linear(to-r, pink.200, blue.200)',
              bgClip: 'text',
              color: 'transparent',
              fontWeight: 'extrabold',
              position: 'relative'
            }}
          >
            Sooth
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              w="200%"
              h="200%"
              borderRadius="full"
              bgGradient="radial(at center, rgba(192,132,252,0.3), transparent)"
              filter="blur(100px)"
              zIndex={-1}
            />
          </Box>
        </MotionHeading>

        <MotionText fontSize="2xl" color="whiteAlpha.900" fontWeight="semibold" letterSpacing="tight" lineHeight="1.4" maxW="2xl" mx="auto">
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
            bgGradient="linear(to-r, rgba(192, 132, 252, 0.8), rgba(96, 165, 250, 0.8))"
            backdropFilter="blur(20px)"
            border="1px solid rgba(255,255,255,0.3)"
            _hover={{
              bgGradient: 'linear(to-r, rgba(192, 132, 252, 1), rgba(96, 165, 250, 1))',
              boxShadow: '0 0 50px rgba(167, 139, 250, 0.7)'
            }}
          >
            Try the Demo
          </MotionButton>
        </NextLink>
      </MotionVStack>
    </>
  );
}