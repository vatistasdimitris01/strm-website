import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'STRM — search any movie or series',
  description: 'A fast terminal app to search and watch movies & series. Install with one command.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
