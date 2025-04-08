'use client';

import { Box, Flex, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { CircleDollarSign, HeartHandshake, MicVocal, LucideIcon } from 'lucide-react';

export default function Section03_Features() {
  return (
    <Box as="section" py={{ base: 20, md: 32 }} px={{ base: 6, md: 16 }}>
      <VStack spacing={8} textAlign="center">
        <Heading fontSize={{ base: '3xl', md: '5xl' }} fontWeight="bold">
          Experience Sooth
        </Heading>
        <Text maxW="3xl" fontSize={{ base: 'md', md: 'lg' }} color="gray.300">
          The voice-first mental health companion that listens, understands, and reflects.
        </Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={12} mt={20}>
        <Feature
          icon={MicVocal}
          title="Whisper Freely"
          description="Speak your mind without judgment. Sooth listens and holds space for your feelings."
        />
        <Feature
          icon={HeartHandshake}
          title="Gentle Reflections"
          description="Receive calm, thoughtful reflections that help you process and understand your inner world."
        />
        <Feature
          icon={CircleDollarSign}
          title="Clarity in Seconds"
          description="Within moments, Sooth gives you a clear, compassionate reflection you can return to anytime."
        />
      </SimpleGrid>
    </Box>
  );
}

type FeatureProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

function Feature({ icon: Icon, title, description }: FeatureProps) {
  return (
    <VStack spacing={4} align="center">
      <Flex
        bg="whiteAlpha.200"
        w={16}
        h={16}
        align="center"
        justify="center"
        borderRadius="full"
      >
        <Icon size={28} />
      </Flex>
      <Heading fontSize="xl">{title}</Heading>
      <Text color="gray.400" fontSize="md" maxW="64" textAlign="center">
        {description}
      </Text>
    </VStack>
  );
}
