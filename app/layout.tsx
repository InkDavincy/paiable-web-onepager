import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AnalyticsProvider } from '@/lib/analytics'
import { I18nProvider } from '@/lib/i18n'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import PageBackground from '@/components/ui/PageBackground'
import InteractiveBackground from '@/components/ui/InteractiveBackground'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'Paiable - Automatisez vos factures. Accélérez vos paiements.',
    template: '%s | Paiable',
  },
  description:
    "Paiable utilise l'IA pour centraliser la gestion de vos factures et dépenses, vous faisant gagner du temps et vous donnant des informations financières claires. Essayez gratuitement.",
  keywords: [
    'factures',
    'paiements',
    'automatisation',
    'IA',
    'gestion',
    'extraction',
    'validation',
    'conformité',
    'Loi 25',
    'PIPEDA',
    'Canada',
    'QuickBooks',
    'comptabilité',
  ],
  authors: [{ name: 'Paiable' }],
  creator: 'Paiable',
  publisher: 'Paiable',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://paiable.ca'),
  alternates: {
    canonical: '/',
    languages: {
      'fr-CA': '/fr-CA',
      'en-CA': '/en-CA',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_CA',
    url: '/',
    title: 'Paiable - Automatisez vos factures. Accélérez vos paiements.',
    description:
      "Paiable utilise l'IA pour centraliser la gestion de vos factures et dépenses, vous faisant gagner du temps et vous donnant des informations financières claires.",
    siteName: 'Paiable',
    images: [
      {
        url: '/og/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Paiable - Automatisation des factures et paiements',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paiable - Automatisez vos factures. Accélérez vos paiements.',
    description:
      "Paiable utilise l'IA pour centraliser la gestion de vos factures et dépenses, vous faisant gagner du temps et vous donnant des informations financières claires.",
    images: ['/og/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr-CA" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <I18nProvider>
          <AnalyticsProvider>
            <div className="relative min-h-screen">
              <InteractiveBackground />
              <PageBackground />
              <div className="relative z-10">
                <Header />
                <main className="overflow-x-hidden">{children}</main>
                <Footer />
              </div>
            </div>
          </AnalyticsProvider>
        </I18nProvider>
      </body>
    </html>
  )
}
