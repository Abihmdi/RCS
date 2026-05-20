import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains-mono'
})

export const metadata: Metadata = {
  title: 'RCS - Modern Digital Systems',
  description: 'We build modern digital systems that help businesses scale, automate, and grow through technology, data, and intelligent solutions.',
  keywords: ['digital systems', 'web development', 'app development', 'AI automation', 'product design', 'Indonesia'],
  authors: [{ name: 'Ruang Cipta Solusi' }],
  openGraph: {
    title: 'RCS - Modern Digital Systems',
    description: 'We build modern digital systems that help businesses scale, automate, and grow.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RCS - Modern Digital Systems',
    description: 'We build modern digital systems that help businesses scale, automate, and grow.',
  },
}

export const viewport: Viewport = {
  themeColor: '#0A0A0B',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
