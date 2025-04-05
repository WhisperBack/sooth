'use client';

import { Box, Container } from '@chakra-ui/react';
import ExperienceHeading from '../components/ExperienceHeading';

export default function HomePage() {
  return (
    <Box
      minH="100vh"
      bgGradient="linear(to right, #68D391, #63B3ED)"  // Green -> Blue gradient using Chakra's default colors
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={4}
    >
      <Container maxW="container.lg" textAlign="center">
        <ExperienceHeading />
        {/* CTA button will go here */}
      </Container>
    </Box>
  );
}
