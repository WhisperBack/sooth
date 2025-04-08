"use client";

import { Box, Text, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function SectionHero() {
  return (
    <MotionBox
      as="section"
      h="100vh"
      w="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(to-b, #0D0D0D, #1A1A1A)"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <Box textAlign="center" px={4}>
        <Heading
          as="h1"
          size="2xl"
          color="white"
          mb={4}
          fontWeight="medium"
          textShadow="0 0 30px rgba(255,255,255,0.1)"
        >
          Sooth
        </Heading>
        <Text
          fontSize="lg"
          color="gray.300"
          maxW="xl"
          mx="auto"
          opacity={0.8}
        >
          Let your world quiet.
        </Text>
      </Box>
    </MotionBox>
  );
}
