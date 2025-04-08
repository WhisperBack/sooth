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
  const [showLine3, setShowLine3] = useState(false)
  const [showLine4, setShowLine4] = useState(false)
  const [showLine5, setShowLine5] = useState(false)
  const [showLine6, setShowLine6] = useState(false)

  useEffect(() => {
    const timer1 = setTimeout(() => setShowLine1(true), 2000)
    const timer2 = setTimeout(() => setShowLine2(true), 4000)
    const timer3 = setTimeout(() => setShowLine3(true), 6000)
    const timer4 = setTimeout(() => setShowLine4(true), 8000)
    const timer5 = setTimeout(() => setShowLine5(true), 10000)
    const timer6 = setTimeout(() => setShowLine6(true), 12000)
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
      clearTimeout(timer5)
      clearTimeout(timer6)
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

      {showLine3 && (
        <Text fontSize="lg" color="gray.400" textAlign="center" mt={10}>
          This is Sooth.
        </Text>
      )}

      {showLine4 && (
        <Text fontSize="lg" color="gray.500" textAlign="center" mt={2}>
          A voice-first companion for your heart.
        </Text>
      )}

      {showLine5 && (
        <Text fontSize="lg" color="gray.600" textAlign="center" mt={2}>
          Speak your mind. I’ll listen. I’ll reflect.
        </Text>
      )}

      {showLine6 && (
        <Text fontSize="lg" color="gray.700" textAlign="center" mt={2}>
          Because even the strongest souls need to be seen.
        </Text>
      )}
    </Box>
  )
}