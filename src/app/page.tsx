// src/app/page.tsx

'use client'

import {
  VStack,
  Text,
  Heading,
  Button,
  keyframes,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.2); }
  70% { box-shadow: 0 0 0 10px rgba(255, 255, 255, 0); }
  100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
`

const MotionButton = motion(Button)

// Extend window and define missing types
// This avoids relying on lib.dom definitions for SpeechRecognition

declare global {
  interface SpeechRecognitionResult {
    readonly isFinal: boolean;
    readonly length: number;
    item(index: number): SpeechRecognitionAlternative;
    [index: number]: SpeechRecognitionAlternative;
  }

  interface SpeechRecognitionAlternative {
    readonly transcript: string;
    readonly confidence: number;
  }

  interface SpeechRecognitionResultList {
    readonly length: number;
    item(index: number): SpeechRecognitionResult;
    [index: number]: SpeechRecognitionResult;
  }

  interface SpeechRecognitionEvent extends Event {
    readonly results: SpeechRecognitionResultList;
  }

  interface SpeechRecognition {
    continuous: boolean;
    interimResults: boolean;
    lang: string;
    start(): void;
    onresult: ((event: SpeechRecognitionEvent) => void) | null;
    onerror: ((event: Event) => void) | null;
  }

  interface Window {
    webkitSpeechRecognition: new () => SpeechRecognition;
  }
}

export default function Page() {
  const [invitationShown, setInvitationShown] = useState(false)
  const [currentLine, setCurrentLine] = useState(0)
  const invitationLines = [
    'This is not an app.',
    'It’s a presence. A companion.',
    'A space to feel, to speak, to be heard.',
    'Welcome to Sooth.'
  ]

  useEffect(() => {
    if (currentLine < invitationLines.length) {
      const timeout = setTimeout(() => {
        setCurrentLine((prev) => prev + 1)
      }, 1800)
      return () => clearTimeout(timeout)
    } else {
      setInvitationShown(true)
    }
  }, [currentLine, invitationLines.length])

  // Live Demo Logic
  const [isListening, setIsListening] = useState(false)
  const [transcript, setTranscript] = useState('')
  const [reflection, setReflection] = useState('')

  const handleListen = async () => {
    setIsListening(true)
    setTranscript('')
    setReflection('')

    const SpeechRecognitionClass = window.webkitSpeechRecognition

    if (!SpeechRecognitionClass) {
      console.error('Speech recognition not supported.')
      setIsListening(false)
      return
    }

    const recognition = new SpeechRecognitionClass()
    recognition.continuous = false
    recognition.interimResults = false
    recognition.lang = 'en-US'

    recognition.start()

    recognition.onresult = (event) => {
      const spoken = event.results[0][0].transcript
      setTranscript(spoken)

      // Simulate reflection generation
      setTimeout(() => {
        setReflection(`“${spoken}” — I hear you. That’s a lot to carry. Let’s sit with it together.`)
        setIsListening(false)
      }, 2000)
    }

    recognition.onerror = () => {
      setTranscript('')
      setIsListening(false)
    }
  }

  return (
    <VStack minH="100vh" spacing={12} px={6} py={24} bg="#0e0e0e" color="white">
      {/* Section 01: Sooth Title */}
      <Heading
        fontSize="7xl"
        textAlign="center"
        bgGradient="linear(to-r, teal.200, purple.300)"
        bgClip="text"
        animation={`${pulse} 3s infinite`}
      >
        Sooth
      </Heading>

      {/* Section 02: Living Invitation */}
      <VStack spacing={2}>
        {invitationLines.slice(0, currentLine).map((line, idx) => (
          <Text key={idx} fontSize="xl" opacity={0.9}>{line}</Text>
        ))}
      </VStack>

      {/* Section 03: Live Demo — Nova Appears */}
      {invitationShown && (
        <VStack spacing={6} pt={16}>
          <Text fontSize="lg" opacity={0.7}>
            When you’re ready, speak.
          </Text>
          <MotionButton
            size="lg"
            variant="outline"
            borderRadius="full"
            px={8}
            py={6}
            animation={isListening ? `${pulse} 2s infinite` : 'none'}
            onClick={handleListen}
          >
            {isListening ? 'Listening…' : 'Speak to Nova'}
          </MotionButton>

          <AnimatePresence>
            {transcript && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <Text fontSize="md" mt={4} fontStyle="italic" opacity={0.8}>
                  {transcript}
                </Text>
              </motion.div>
            )}

            {reflection && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Text mt={6} fontSize="xl" opacity={0.9} maxW="xl">
                  {reflection}
                </Text>
              </motion.div>
            )}
          </AnimatePresence>
        </VStack>
      )}
    </VStack>
  )
}