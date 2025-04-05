'use client';

import { Box } from '@chakra-ui/react';
import ExperienceHeading from '../components/ExperienceHeading';

export default function HomePage() {
  return (
    <Box
      minH="100vh"
      bgGradient="linear(to-b, purple.50, blue.50)"
      display="flex"
      flexDirection="column"
    >
      <ExperienceHeading />
    </Box>
  );
}