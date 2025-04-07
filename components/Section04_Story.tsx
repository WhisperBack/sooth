'use client';

import {
  VStack,
  Box,
  Heading,
  Text,
  Input,
  Button,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { useState } from 'react';

export default function FounderNote() {
  const [email, setEmail] = useState('');

  return (
    <VStack spacing={10} py={{ base: 20, md: 28 }} px={{ base: 6, md: 12 }} textAlign="center">
      <Heading
        size="2xl"
        bgGradient="linear(to-r, blue.200, purple.300, pink.300)"
        bgClip="text"
        textShadow="0 0 16px rgba(255, 255, 255, 0.1)"
      >
        Get Early Access
      </Heading>

      <Text fontSize={{ base: 'lg', md: 'xl' }} color="whiteAlpha.800" maxW="2xl">
        Sooth was born out of a deeply personal need — a way to feel heard, understood, and grounded in the chaos. I’m building this by hand so it can feel real to you, too.
      </Text>

      <Box maxW="lg" w="full">
        <InputGroup size="lg">
          <Input
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="filled"
            bg="whiteAlpha.100"
            _placeholder={{ color: 'whiteAlpha.600' }}
            color="whiteAlpha.900"
            borderRadius="xl"
          />
          <InputRightElement width="auto" mr={2}>
            <Button
              h="1.75rem"
              size="sm"
              colorScheme="purple"
              px={4}
              borderRadius="xl"
              onClick={() => alert(`You entered: ${email}`)} // Replace this with your Supabase logic later
            >
              Join
            </Button>
          </InputRightElement>
        </InputGroup>
      </Box>
    </VStack>
  );
}
