// src/app/page.tsx

'use client'

import { Box, Text } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import { useEffect, useState } from 'react'

const pulse = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.05); }
`

export default function Page() {
  const [showLine1, setShowLine1] = useState(false)
  const [showLine2, setShowLine2] = useState(false)

  useEffect(() => {
    const timer1 = setTimeout(() => setShowLine1(true), 2000)
    const timer2 = setTimeout(() => setShowLine2(true), 4000)
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  return (
    <Box
      as="main"
      h="100vh"
      w="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bg="#0e0e0e"
      px={6}
    >
      <Text
        fontSize={["5xl", "6xl"]}
        fontWeight="bold"
        color="white"
        mb={6}
        animation={`${pulse} 5s ease-in-out infinite`}
      >
        Sooth
      </Text>

      {showLine1 && (
        <Text fontSize="lg" color="gray.400" textAlign="center">
          You’ve arrived.
        </Text>
      )}

      {showLine2 && (
        <Text fontSize="lg" color="gray.500" textAlign="center" mt={2}>
          Let the world quiet.
        </Text>
      )}
    </Box>
  )
}