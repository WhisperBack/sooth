'use client';

import {
  Heading,
  VStack,
  Box,
  Flex,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import NextLink from 'next/link';
import { Global } from '@emotion/react';

const MotionVStack = motion(VStack);
const MotionHeading = motion(Heading);

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

      @keyframes chaseGradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
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
          <Flex
            as="nav"
            bg="rgba(0, 0, 0, 0.2)"
            backdropFilter="blur(20px)"
            borderRadius="3xl"
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
              { href: '/contact', label: 'Contact' },
            ].map((link, i) => (
              <NextLink key={i} href={link.href} passHref>
                <ChakraLink
                  color="whiteAlpha.800"
                  _hover={{ color: 'white' }}
                  fontWeight="medium"
                  fontSize={{ base: 'sm', md: 'md' }}
                >
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
          color="white"
          textShadow="0 0 24px rgba(255,255,255,0.3)"
        >
          <Box display="inline-block" position="relative">
            <Box as={motion.div} display="inline-block" w={{ base: '300px', md: '460px' }} h="auto">
              <svg
                viewBox="0 0 900 200"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="auto"
              >
                <defs>
                  <linearGradient id="animatedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#60a5fa">
                      <animate
                        attributeName="offset"
                        values="0%;100%;0%"
                        dur="4s"
                        repeatCount="indefinite"
                      />
                    </stop>
                    <stop offset="50%" stopColor="#a78bfa">
                      <animate
                        attributeName="offset"
                        values="50%;150%;50%"
                        dur="4s"
                        repeatCount="indefinite"
                      />
                    </stop>
                    <stop offset="100%" stopColor="#c084fc">
                      <animate
                        attributeName="offset"
                        values="100%;200%;100%"
                        dur="4s"
                        repeatCount="indefinite"
                      />
                    </stop>
                  </linearGradient>
                </defs>
                <text
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fontSize="130"
                  fontFamily="Geist, sans-serif"
                  fontWeight="800"
                  fill="white"
                  stroke="url(#animatedGradient)"
                  strokeWidth="2"
                >
                  Experience
                </text>
              </svg>
            </Box>
            <Box
              as={motion.span}
              display="inline-block"
              bgGradient="linear(to-r, #c084fc, #60a5fa)"
              bgClip="text"
              fontWeight="extrabold"
              style={{ WebkitTextStroke: '1px white' }}
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
          </Box>
        </MotionHeading>
      </MotionVStack>
    </>
  );
}
