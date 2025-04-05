'use client';

import { Box, Container, Button, Heading, Text } from '@chakra-ui/react';
import ExperienceHeading from '../components/ExperienceHeading';

export default function HomePage() {
  return (
    <Box
      minH="100vh"
      bgGradient="linear(to right, green.200, blue.200)"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={4}
    >
      <Container maxW="container.lg" textAlign="center">
        <ExperienceHeading />

        <Heading
          as="h1"
          fontSize="7xl"
          fontWeight="semibold"
          bgGradient="linear(to-r, purple.200, pink.200)"
          bgClip="text"
          lineHeight="1.2"
          letterSpacing="-0.5px"
          mt={4}
        >
          Experience Sooth
        </Heading>

        <Button
          mt={6}
          colorScheme="pink"
          bg="pink.200"
          color="white"
          _hover={{ bg: 'purple.200' }}
          size="lg"
        >
          Start Your Journey
        </Button>

        <Box
          mt={12}
          p={6}
          bg="gray.100"
          borderRadius="md"
          boxShadow="lg"
        >
          <Heading color="gray.600">Why Choose Sooth?</Heading>
          <Text color="gray.600" mt={4}>
            Discover how our app helps you connect with your inner peace.
          </Text>
        </Box>

        <Button
          mt={6}
          colorScheme="purple"
          bg="purple.200"
          color="white"
          _hover={{ bg: 'pink.200' }}
          size="lg"
        >
          Learn More
        </Button>
      </Container>
    </Box>
  );
}
