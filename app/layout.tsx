import type { Metadata } from 'next'
import { Inter, Rajdhani } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-rajdhani',
})

export const metadata: Metadata = {
  title: {
    default: 'Obsidian Gaming',
    template: '%s | Obsidian Gaming',
  },
  description:
    'Obsidian Gaming — professional esports organization competing across Valorant, CS2, Apex Legends, Call of Duty, Overwatch 2, and Rocket League.',
  keywords: ['esports', 'obsidian gaming', 'valorant', 'cs2', 'apex legends', 'overwatch', 'rocket league'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${rajdhani.variable}`}>
      <body className="bg-obsidian text-white font-body antialiased">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
