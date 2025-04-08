import '@fontsource-variable/geist'
import '@fontsource-variable/geist-mono'
import { ReactNode } from 'react'
import { ChakraProvider } from '@chakra-ui/react'

export const metadata = {
  title: 'Sooth',
  description: 'Your voice-first AI companion',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          {children}
        </ChakraProvider>
      </body>
    </html>
  )
}