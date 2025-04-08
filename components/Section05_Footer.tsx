'use client';

import { Box, Text, VStack } from '@chakra-ui/react';

export default function Footer() {
  return (
    <VStack
      spacing={6}
      py={{ base: 16, md: 24 }}
      px={{ base: 6, md: 12 }}
      textAlign="center"
      bg="rgba(0, 0, 0, 0.6)"
      borderRadius="xl"
    >
      <Text
        fontSize={{ base: 'lg', md: 'xl' }}
        color="white"
        fontStyle="italic"
        maxW="3xl"
      >
        &quot;Sooth is where your voice becomes feeling, your emotion finds expression, and your presence returns to peace.&quot;
      </Text>

      <Box pt={4}>
        <Text fontSize="sm" color="whiteAlpha.700">
          &copy; {new Date().getFullYear()} Sooth. All rights reserved.
        </Text>
      </Box>
    </VStack>
  );
}