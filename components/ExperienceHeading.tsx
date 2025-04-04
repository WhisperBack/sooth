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
      <Box
        position="sticky"
        top={0}
        zIndex={10}
        width="100%"
        bg="rgba(0, 0, 0, 0.3)"
        backdropFilter="blur(10px)"
      >
        <Box maxW="7xl" mx="auto">
          <Flex as="nav" justify="center" gap={8} px={6} py={4}>
            {[
              { href: '/about', label: 'About' },
              { href: '/demo', label: 'Demo' },
              { href: '/privacy', label: 'Privacy' },
              { href: '/terms', label: 'Terms' },
              { href: '/how-it-works', label: 'How It Works' },
              { href: '/contact', label: 'Contact' }
            ].map((link, i) => (
              <NextLink key={i} href={link.href} passHref>
                <ChakraLink color="whiteAlpha.800" _hover={{ color: 'white' }} fontWeight="medium">
                  {link.label}
                </ChakraLink>
              </NextLink>
            ))}
          </Flex>
        </Box>
      </Box>

      <MotionVStack spacing={12} textAlign="center" py={{ base: 28, md: 40 }}>
        <MotionHeading
          fontSize={{ base: '6xl', md: '8xl' }}
          fontWeight="extrabold"
          color="white"
          textShadow="0 0 24px rgba(255,255,255,0.3)"
          position="relative"
          zIndex={1}
        >
          Experience{' '}
          <Box
            as={motion.span}
            position="relative"
            display="inline-block"
            bgGradient="linear(to-r, #c084fc, #60a5fa)"
            bgClip="text"
            fontWeight="extrabold"
            zIndex={1}
          >
            Sooth
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              w="150%"
              h="150%"
              borderRadius="full"
              bgGradient="radial(at center, rgba(192,132,252,0.3), transparent)"
              filter="blur(80px)"
              zIndex={-1}
            />
          </Box>
        </MotionHeading>

        <MotionText fontSize="lg" color="whiteAlpha.800" maxW="2xl" mx="auto">
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
            bgGradient="linear(to-r, #a78bfa, #38bdf8)"
            color="white"
            borderRadius="full"
            boxShadow="0 0 20px rgba(167, 139, 250, 0.4)"
            _hover={{
              bgGradient: 'linear(to-r, #c084fc, #60a5fa)',
              boxShadow: '0 0 40px rgba(167, 139, 250, 0.6)',
            }}
          >
            Try the Demo
          </MotionButton>
        </NextLink>

        {/* Additional sections truncated for brevity */}

      </MotionVStack>
    </>
  );
}