import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header/Index'
import { Footer } from '@/components/footer/Index'

const inter = Work_Sans({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'Pasión por las Finanzas',
  description: 'Página web de Pasión por las Finanzas, asesoría financiera y educación financiera',
  authors: [{name: 'Tyrone Valverde Soriano'}, {name: 'Andrés Valverde'}],
  publisher: 'Tyrone Valverde Soriano',
  creator: 'Tyrone Valverde Soriano',
  alternates: {
    canonical: 'https://www.pasionfinanzas.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
          <Header />
          {children}
          <Footer />
      </body>
    </html>
  )
}
