'use client';

import { Box, Container, Button, Heading, Text } from '@chakra-ui/react';
import ExperienceHeading from '../components/ExperienceHeading';

export default function HomePage() {
  return (
    <Box
      minH="100vh"
      bgGradient="linear(to right, green.200, blue.200)" // Chakra green → blue gradient
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={4}
    >
      <Container maxW="container.lg" textAlign="center">
        {/* Experience Heading */}
        <ExperienceHeading />

        {/* Main CTA Button */}
        <Button
          mt={6}
          colorScheme="pink"
          bg="pink.200" // Soft pink for warmth and compassion
          color="white"
          _hover={{
            bg: "purple.200", // Lavender on hover for calmness
          }}
          size="lg"
        >
          Start Your Journey
        </Button>

        {/* Section with Beige/Taupe Background */}
        <Box
          mt={12}
          p={6}
          bg="gray.100" // Beige/Taupe equivalent (soft, cozy feel)
          borderRadius="md"
          boxShadow="lg"
        >
          <Heading color="gray.600">Why Choose Sooth?</Heading>
          <Text color="gray.600" mt={4}>
            Discover how our app helps you connect with your inner peace.
          </Text>
        </Box>

        {/* Secondary CTA Button */}
        <Button
          mt={6}
          colorScheme="purple"
          bg="purple.200" // Lavender for peaceful, emotional support
          color="white"
          _hover={{
            bg: "pink.200", // Pink on hover for warmth
          }}
          size="lg"
        >
          Learn More
        </Button>
      </Container>
    </Box>
  );
}
