import { Goals } from '@/components/sections/about/goals/Index'
import { Hero } from '@/components/sections/about/hero/Index'
import { Team } from '@/components/sections/about/team/Index'

import { Metadata } from 'next'

const props = {
  title: 'Sobre nosotros',
  description: '¿Qué es pasión por las finanzas y cómo te puede ayudar?',
  keywords: 'finanzas, educación financiera, finanzas personales, finanzas para principiantes, finanzas para dummies, finanzas para todos, finanzas para emprendedores, finanzas para empresas, finanzas para pymes, finanzas para negocios, finanzas para profesionales, finanzas para estudiantes, finanzas para universitarios, finanzas para autónomos, finanzas para trabajadores, finanzas para empleados',
}

export const metadata: Metadata = {
  title: props.title,
  description: props.description,
  keywords: props.keywords,
  openGraph: {
    title: props.title,
    description: props.description,
    url: 'https://www.pasionfinanzas.com/about',
    type: 'website',
    images: [
      {
        url: 'https://www.pasionfinanzas.com/images/og_image.webp',
        width: 1200,
        height: 630,
        alt: props.title,
      },
    ],
  },
  }


export default function About() {
  return (
    <>
      <Hero />
      <Goals />
      <Team />
    </>
  )
}
