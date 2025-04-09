// src/app/layout.tsx

import { ReactNode } from 'react'
import Providers from './providers' // ✅ fixed import

export const metadata = {
  title: 'Sooth',
  description: 'A voice-first companion to reflect, feel, and grow.',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
