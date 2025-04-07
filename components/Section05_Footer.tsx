'use client';

import { Box, Text, VStack } from '@chakra-ui/react';

export default function Footer() {
  return (
    <VStack
      spacing={6}
      py={{ base: 16, md: 24 }}
      px={{ base: 6, md: 12 }}
      textAlign="center"
      bg="transparent"
    >
      <Text
        fontSize={{ base: 'lg', md: 'xl' }}
        color="whiteAlpha.700"
        fontStyle="italic"
        maxW="3xl"
      >
        &quot;Sooth is where your voice becomes feeling, your emotion finds expression, and your presence returns to peace.&quot;
      </Text>

      <Box pt={4}>
        <Text fontSize="sm" color="whiteAlpha.500">
          &copy; {new Date().getFullYear()} Sooth. All rights reserved.
        </Text>
      </Box>
    </VStack>
  );
}
