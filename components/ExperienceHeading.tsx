'use client';

import { Heading, Text, VStack, Button, Box, Flex, Link as ChakraLink, SimpleGrid, Input } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import NextLink from 'next/link';
import { Global } from '@emotion/react';
import { Mic, Sparkles, MessageCircle } from 'lucide-react';

const MotionText = motion(Text);
const MotionVStack = motion(VStack);
const MotionHeading = motion(Heading);
const MotionButton = motion(Button);
const MotionBox = motion(Box);

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
        bg="rgba(0, 0, 0, 0.2)"
        backdropFilter="blur(14px)"
        px={{ base: 4, md: 8 }}
      >
        <Flex justify="center">
          <Flex
            as="nav"
            px={{ base: 4, md: 12 }}
            py={4}
            gap={6}
            justify="center"
            wrap="wrap"
            width="100%"
            borderRadius="3xl"
            boxShadow="0 4px 30px rgba(0, 0, 0, 0.2)"
            bg="rgba(0, 0, 0, 0.25)"
            backdropFilter="blur(12px)"
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
                <ChakraLink color="whiteAlpha.800" _hover={{ color: 'white' }} fontWeight="medium" fontSize={{ base: 'sm', md: 'md' }}>
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
          Experience{' '}
          <Box
            as={motion.span}
            display="inline-block"
            bgGradient="linear(to-r, #c084fc, #60a5fa)"
            bgClip="text"
            fontWeight="extrabold"
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
              boxShadow: '0 0 40px rgba(167, 139, 250, 0.6)'
            }}
          >
            Try the Demo
          </MotionButton>
        </NextLink>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} pt={16} maxW="6xl">
          {[
            { icon: Mic, title: 'Whisper Freely', desc: 'Let your thoughts flow. No judgment. Just space.' },
            { icon: Sparkles, title: 'Gentle Reflections', desc: 'Sooth listens, then gives you back peace.' },
            { icon: MessageCircle, title: 'Clarity in Seconds', desc: 'Your insights. Summarized. In your words.' },
          ].map((item, index) => (
            <MotionBox
              key={index}
              p={6}
              borderRadius="2xl"
              bg="rgba(255,255,255,0.06)"
              backdropFilter="blur(14px)"
              border="1px solid rgba(255, 255, 255, 0.1)"
              color="whiteAlpha.900"
              boxShadow="xl"
              _hover={{ transform: 'translateY(-4px)', boxShadow: '2xl' }}
            >
              <Box mb={4} color="whiteAlpha.700">
                <item.icon size={32} strokeWidth={1.2} />
              </Box>
              <Text fontWeight="bold" fontSize="xl" mb={1}>{item.title}</Text>
              <Text fontSize="md" opacity={0.8}>{item.desc}</Text>
            </MotionBox>
          ))}
        </SimpleGrid>

        <VStack spacing={6} mt={24} px={6} textAlign="center" maxW="2xl" mx="auto">
          <Text fontSize="xl" fontStyle="italic" color="whiteAlpha.800">
            “Sooth was born from the need for a place where thoughts could be spoken freely, without judgment.”
          </Text>
          <Text color="whiteAlpha.600">— Jaycob, Founder</Text>
        </VStack>

        <VStack spacing={6} mt={24} px={6} textAlign="center">
          <Heading size="lg" color="white">
            Get Early Access
          </Heading>
          <Text color="whiteAlpha.700" maxW="lg" mx="auto">
            Join the waitlist and be the first to try Sooth. No spam. Just peace.
          </Text>
          <Box as="form" maxW="md" w="full" mx="auto">
            <VStack spacing={4}>
              <Input
                type="email"
                placeholder="Your email"
                bg="white"
                color="black"
                borderRadius="md"
                size="lg"
                _placeholder={{ color: 'gray.500' }}
              />
              <Button type="submit" colorScheme="blue" size="lg" w="full">
                Join Waitlist
              </Button>
            </VStack>
          </Box>
        </VStack>

        <SimpleGrid mt={24} pt={12} borderTop="1px solid rgba(255,255,255,0.1)" columns={3} spacing={8} color="whiteAlpha.600" fontSize="sm" textAlign="center">
          <NextLink href="/about">About</NextLink>
          <NextLink href="/demo">Demo</NextLink>
          <NextLink href="/privacy">Privacy</NextLink>
        </SimpleGrid>

        <Box mt={20} textAlign="center" fontSize="sm" color="whiteAlpha.700" px={6} pb={10}>
          “Peace begins with a whisper.”
        </Box>
      </MotionVStack>
    </>
  );
}
