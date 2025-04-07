'use client';

import { Heading, Text, VStack, Button, Box, Flex, Link as ChakraLink, SimpleGrid, Input, IconButton, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Stack } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import NextLink from 'next/link';
import { Global } from '@emotion/react';
import { Mic, Sparkles, MessageCircle } from 'lucide-react';

const MotionVStack = motion(VStack);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionButton = motion(Button);

const MotionBox = motion(Box);

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

@keyframes pulseGlow {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.05); }
}

@keyframes scrollText {
  0% { transform: translateX(50%); }

  100% { transform: translateX(-100%); }
}
        50% { opacity: 1; transform: scale(1.05); }
      }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      

      @keyframes drift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      }
    `}
  />
);

export default function ExperienceHeading() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const pathname = usePathname();
  return (
    <>
      <ScrollbarStyles />

      {/* Sticky Top Navigation */}
      <Box position="sticky" top={0} zIndex={10} width="100%" px={{ base: 4, md: 8 }}>
        <Flex justify="center" maxW="7xl" mx="auto" position="relative">
          <Box
            position="absolute"
            top="0"
            left="50%"
            transform="translateX(-50%)"
            w="80%"
            h="100%"
            bgGradient="radial(at center, rgba(255,255,255,0.06), transparent)"
            filter="blur(40px)"
            zIndex={-1}
          />
          {/* Desktop Navigation */}
          <Flex
            as="nav"
            display={{ base: 'none', md: 'flex' }}
            backgroundImage="linear(to right, var(--chakra-colors-blue-200), var(--chakra-colors-purple-300), var(--chakra-colors-pink-300))"
            backgroundColor="rgba(255, 255, 255, 0.025)"
            backgroundSize="300% 300%"
            backgroundPosition="center"
            backdropFilter="blur(30px)"
            borderRadius="2xl"
            px={{ base: 4, md: 12 }}
            animation="drift 18s ease-in-out infinite"
            py={4}
            gap={6}
            justify="center"
            wrap="wrap"
            width="100%"
            border="1px solid rgba(255, 255, 255, 0.05)"
            boxShadow="0 4px 24px rgba(0, 0, 0, 0.2)"
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
                <ChakraLink
                  bgClip="text"
                  bgGradient={pathname === link.href ? 'linear(to-r, purple.300, blue.300)' : 'linear(to-r, whiteAlpha.800, whiteAlpha.900)'}
                  fontWeight="semibold"
                  fontSize={{ base: 'md', md: 'lg' }}
                  fontFamily="heading"
                  letterSpacing="wide"
                  textShadow="0 0 6px rgba(255,255,255,0.2)"
                  transition="all 0.2s"
                  _hover={{
                    transform: 'translateY(-2px)',
                    bgGradient: 'linear(to-r, blue.300, purple.300)',
                    color: 'transparent',
                    bgClip: 'text'
                  }}
                >
                  {link.label}
                </ChakraLink>
              </NextLink>
            ))}
          </Flex>

          {/* Mobile Hamburger Menu */}
          <Box display={{ base: 'flex', md: 'none' }} alignItems="center" justifyContent="flex-end" w="full">
            <IconButton
              icon={<Box as="span" fontSize={{ base: '6xl', md: '4xl' }}>☰</Box>}
              variant="ghost"
              aria-label="Open Menu"
              onClick={onOpen}
              color="whiteAlpha.800"
            />
            <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
              <DrawerOverlay />
              <DrawerContent bgGradient="linear(to-br, blue.200, purple.300, pink.200)" backgroundSize="300% 300%" animation="drift 20s ease-in-out infinite" backdropFilter="blur(24px)" borderLeft="1px solid rgba(255,255,255,0.1)">
                <DrawerCloseButton color="whiteAlpha.800" />
                <DrawerHeader borderBottomWidth="1px" color="whiteAlpha.900">Menu</DrawerHeader>
                <DrawerBody>
                  <Stack spacing={4} mt={4} fontWeight="semibold" fontSize="xl">
                    {[
                      { href: '/about', label: 'About' },
                      { href: '/demo', label: 'Demo' },
                      { href: '/privacy', label: 'Privacy' },
                      { href: '/terms', label: 'Terms' },
                      { href: '/how-it-works', label: 'How It Works' },
                      { href: '/contact', label: 'Contact' }
                    ].map((link, i) => (
                      <NextLink key={i} href={link.href} passHref>
                        <ChakraLink
                          fontSize="lg"
                          fontWeight="medium"
                          color="whiteAlpha.900"
                          _hover={{ color: 'blue.300' }}
                          onClick={onClose}
                        >
                          {link.label}
                        </ChakraLink>
                      </NextLink>
                    ))}
                  </Stack>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Box>
        </Flex>
      </Box>

      <MotionVStack spacing={12} textAlign="center" py={{ base: 20, md: 28 }} pt={{ base: 8, md: 20 }} overflow="hidden" position="relative">
        <MotionHeading
  position="relative"
  px={{ base: 4, md: 0 }}
  maxW={{ base: '90%', md: '100%' }}
  mx="auto"
  textAlign="center"
>
  <MotionBox
    position="absolute"
    top="50%"
    left="50%"
    transform="translate(-50%, -50%)"
    w="200%"
    h="200%"
    bgGradient="radial(at center, rgba(255,255,255,0.05), transparent)"
    filter="blur(160px)"
    zIndex={-1}
  />
  <Box
    as="span"
    fontSize={{ base: '7xl', md: '7xl', lg: '8xl' }}
    mb={4}
    lineHeight="1.1"
    bgGradient="linear(to-r, blue.200, purple.300, pink.200)"
    backgroundSize="300% 300%"
    animation="drift 18s ease-in-out infinite"
    
    bgClip="text"
  >
    Experience
  </Box>{' '}
  <Box
    as="span"
    fontSize={{ base: '7xl', md: '7xl', lg: '8xl' }}
    bgGradient="linear(to-r, blue.200, purple.300, pink.200)"
    textShadow="0 0 32px rgba(255, 255, 255, 0.1)"
    backgroundSize="300% 300%"
    animation="drift 20s ease-in-out infinite"
    bgClip="text"
  >
    Sooth
  </Box>
</MotionHeading>

        <Box position="relative" display="inline-block" width="100%">
          <MotionBox
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            width="120%"
            height="100%"
            bgGradient="radial(at center, rgba(255,255,255,0.08), transparent)"
            filter="blur(60px)"
            zIndex={-1}
          />
          <MotionText
            mt={6}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 1.2, ease: 'easeOut' }}
            fontSize={{ base: '2xl', md: '3xl' }}
            fontWeight="semibold"
            letterSpacing="-0.5px"
            lineHeight="1.4"
            maxW="2xl"
            mx="auto"
            color="whiteAlpha.900"
            textShadow="0 1px 2px rgba(0,0,0,0.2)"
          >
            Your voice, your peace. <br />
            Speak, and <Box as="span" fontWeight="bold" textShadow="0 0 8px rgba(255,255,255,0.1)">Sooth</Box> listens.
          </MotionText>
        </Box>

        <NextLink href="/demo" passHref>
          <Box position="relative" display="inline-block">
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              w="200%"
              h="200%"
              bgGradient="radial(at center, rgba(255,255,255,0.08), transparent)"
              filter="blur(80px)"
              zIndex={-1}
              animation="pulseGlow 3s ease-in-out infinite"
            />
            <MotionButton
  as="a"
  px={{ base: 6, md: 8 }}
  py={{ base: 5, md: 6 }}
  fontSize="lg"
  fontWeight="semibold"
  color="white"
  bgGradient="linear(to-r, blue.200, purple.300, pink.200)"
  backgroundSize="300% 300%"
  animation="drift 18s ease-in-out infinite"
  backdropFilter="blur(20px)"
  border="1px solid rgba(255,255,255,0.3)"
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 1.2, duration: 0.6, ease: 'easeOut' }}
  whileHover={{ scale: 1.04 }}
  _hover={{
    transform: 'translateY(-2px)',
    boxShadow: '0 0 30px rgba(167, 139, 250, 0.4)'
  }}
>
  Try the Demo
</MotionButton>
          </Box>
        </NextLink>

        <Box position="relative" w="full" maxW="6xl" mx="auto">
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            w="200%"
            h="140%"
            bgGradient="radial(at center, rgba(255,255,255,0.04), transparent)"
            filter="blur(100px)"
            zIndex={-1}
          />
          <SimpleGrid columns={{ base: 1, md: 3 }} px={{ base: 4, md: 0 }} spacing={{ base: 6, md: 8 }} pt={{ base: 10, md: 16 }} maxW="6xl" alignItems="stretch">
          {[
            { icon: Mic, title: 'Whisper Freely', desc: 'Let your thoughts flow. No judgment. Just space.' },
            { icon: Sparkles, title: 'Gentle Reflections', desc: 'Sooth listens, then gives you back peace.' },
            { icon: MessageCircle, title: 'Clarity in Seconds', desc: 'Your insights. Summarized. In your words.' },
          ].map((item, index) => (
            <MotionBox
              key={index}
              h="full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <Box
                p={6}
                borderRadius="2xl"
                _hover={{
  transform: 'translateY(-4px)',
  boxShadow: `${index === 0 ? '0 0 120px rgba(144, 205, 244, 1), 0 0 60px rgba(144, 205, 244, 0.7)' : index === 1 ? '0 0 120px rgba(251, 182, 206, 1), 0 0 60px rgba(251, 182, 206, 0.7)' : '0 0 120px rgba(203, 152, 255, 1), 0 0 60px rgba(203, 152, 255, 0.7)'}, 0 0 36px rgba(255,255,255,0.3)`,
  borderColor: 'rgba(255,255,255,0.3)'
}}
                transition="all 0.3s ease"
                cursor="default"
                bg="rgba(255,255,255,0.10)"
                backdropFilter="blur(20px)"
                border="1px solid rgba(255, 255, 255, 0.18)"
                boxShadow="0 8px 48px rgba(167, 139, 250, 0.25), inset 0 0 32px rgba(255,255,255,0.06)"
                h="full"
              >
                <VStack spacing={5} textAlign="center"
              >
                <MotionBox whileHover={{ scale: 1.08 }} transition={{ duration: 0.3 }}>
  <item.icon size={32} strokeWidth={1.2} color={index === 0 ? '#90cdf4' : index === 1 ? '#fbb6ce' : '#d6bcfa'} />
</MotionBox>
              <Text fontWeight="bold" fontSize="2xl" letterSpacing="-0.5px" bgGradient={index === 0 ? 'linear(to-r, blue.100, blue.300)' : index === 1 ? 'linear(to-r, pink.100, pink.300)' : 'linear(to-r, purple.100, purple.300)'} textShadow="0 1px 1px rgba(0,0,0,0.2)" bgClip="text">
  {item.title}
</Text>
              <Text fontSize="lg" lineHeight="1.6" color="whiteAlpha.900" pt={2}>{item.desc}</Text>
              </VStack>
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>
        </Box>

        

        <VStack spacing={6} mt={{ base: 16, md: 24 }} px={{ base: 4, md: 6 }} textAlign="center">
          <MotionHeading
  position="relative"
  fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
  maxW={{ base: '90%', md: '100%' }}
  mx="auto"
  fontWeight="bold"
  bgGradient="linear(to-r, blue.200, purple.300, pink.200)"
  backgroundSize="300% 300%"
  animation="drift 20s ease-in-out infinite"
  bgClip="text"
  textShadow="0 0 32px rgba(255, 255, 255, 0.1)"
>
  Get Early Access
</MotionHeading>
          <Text
  fontSize={{ base: 'md', md: 'lg' }}
  color="whiteAlpha.700"
  maxW="lg"
  mx="auto"
  lineHeight="1.6"
>
  Join the waitlist and be the first to try Sooth. No spam. Just peace.
</Text>
          <Box as="form" maxW="md" w="full" mx="auto">
            <VStack spacing={4}>
              <Input
  type="email"
  placeholder="Your email"
  bg="rgba(255, 255, 255, 0.18)"
  color="white"
  border="1px solid rgba(255, 255, 255, 0.3)"
  backdropFilter="blur(20px)"
  borderRadius="xl"
  size="lg"
  fontSize="lg"
  _placeholder={{ color: 'whiteAlpha.800', fontSize: { base: 'md', md: 'lg' } }}
  _focus={{ borderColor: 'blue.300', boxShadow: '0 0 0 1px rgba(144,205,244,0.6)' }}
  _hover={{ bg: 'rgba(255, 255, 255, 0.22)' }}
  bgGradient="linear(to-r, rgba(144, 205, 244, 0.4), rgba(203, 152, 255, 0.4))"
/>
              <MotionButton
  type="submit"
  px={8}
  py={6}
  fontSize="lg"
  fontWeight="semibold"
  color="white"
  bgGradient="linear(to-r, blue.200, purple.300, pink.200)"
  backgroundSize="300% 300%"
  animation="drift 20s ease-in-out infinite"
  backdropFilter="blur(20px)"
  border="1px solid rgba(255,255,255,0.3)"
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 1.2, duration: 0.6, ease: 'easeOut' }}
  whileHover={{ scale: 1.04 }}
  _hover={{
    transform: 'translateY(-2px)',
    boxShadow: '0 0 30px rgba(167, 139, 250, 0.4)'
  }}
>
  Join Waitlist
</MotionButton>
            </VStack>
          </Box>
        </VStack>

        

        <Box mt={8} px={{ base: 4, md: 6 }} textAlign="center">
  <Box
    maxW="3xl"
    mx="auto"
    px={8}
    py={6}
    bg="transparent"
    borderRadius="xl"
    textAlign="center"
  >
    <Text
  fontSize={{ base: '2xl', md: '4xl', lg: '4xl' }}
  fontWeight="bold"
  bgGradient="linear(to-r, blue.100, blue.300, purple.200, pink.200, pink.300)"
  bgClip="text"
  backgroundSize="300% 300%"
  animation="drift 20s ease-in-out infinite"
  color="transparent"
  textShadow="0 0 12px rgba(255,255,255,0.15)"
  lineHeight="1.4"
>
  Sooth is where your voice becomes feeling and your silence is sacred.<br />
  Healing, finally, has a home.
</Text>
  </Box>
</Box>
</MotionVStack>
    </>
  );
}
