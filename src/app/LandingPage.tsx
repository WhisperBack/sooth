'use client'

import { Box, Text } from '@chakra-ui/react'

export default function LandingPage() {
  return (
    <Box
      as="main"
      h="100vh"
      w="100%"
      bg="black"
      color="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      px={8}
      py={16}
    >
      <Text fontSize="4xl" fontWeight="bold">
        Sooth
      </Text>
      <Text fontSize="lg" maxW="lg" textAlign="center">
        This is the beginning of something sacred.
      </Text>
    </Box>
  )
}
