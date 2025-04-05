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
            {[
              { href: '/about', label: 'About' },
              { href: '/demo', label: 'Demo' },
              { href: '/privacy', label: 'Privacy' },
              { href: '/terms', label: 'Terms' },
              { href: '/how-it-works', label: 'How It Works' },
              { href: '/contact', label: 'Contact' }
            ].map((link, i) => (
              <NextLink key={i} href={link.href} passHref>
                <ChakraLink color="whiteAlpha.900" _hover={{ color: 'white' }} fontWeight="semibold" fontSize={{ base: 'sm', md: 'md' }} letterSpacing="tight">
                  {link.label}
                </ChakraLink>
              </NextLink>
            ))}
          </Flex>
        </Flex>
      </Box>

      <MotionVStack spacing={12} textAlign="center" py={{ base: 28, md: 40 }}>
        <MotionHeading
          fontSize={{ base: '6xl', md: '8xl' }}
          fontWeight="extrabold"
          color="whiteAlpha.900"
        >
          Experience Sooth
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

        {/* Remaining content stays unchanged */}

      </MotionVStack>
    </>
  );
}
