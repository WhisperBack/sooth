'use client';

import { Box } from '@chakra-ui/react';
import ExperienceHeading from '../components/ExperienceHeading';

export default function HomePage() {
  return (
    <Box
      minH="100vh"
      bgGradient="linear(to right, green.200, blue.200)"
      display="flex"
      flexDirection="column"
    >
      <ExperienceHeading />
    </Box>
  );
}
