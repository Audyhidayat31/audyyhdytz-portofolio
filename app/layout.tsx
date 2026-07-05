import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Great_Vibes } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-great-vibes',
})

export const metadata: Metadata = {
  title: 'Audy Abdillah Hidayat | Portofolio Mahasiswa Informatika',
  description: 'Portofolio profesional dari mahasiswa Informatika dan developer yang bersemangat. Menampilkan proyek, keahlian, dan pengalaman dalam pengembangan web dan desain UI/UX.',
  keywords: ['Portofolio', 'Developer', 'Pengembangan Web', 'React', 'Next.js', 'UI/UX'],
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Nama Anda | Portofolio',
    description: 'Portofolio profesional yang menampilkan karya saya dalam pengembangan dan desain web',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  userScalable: true,
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={`scroll-smooth dark ${spaceGrotesk.variable} ${greatVibes.variable}`}>
      <body className={`${spaceGrotesk.className} antialiased bg-background text-foreground`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
