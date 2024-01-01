import { ContactEmail } from '@/components/contact-email/Index'
import { Metadata } from 'next'
import Image from 'next/image'

const props = {
  title: 'Contacto',
  description: 'Contacta con nosotros para recibir una asesoría financiera especializada y personalizada',
  keywords: 'finanzas, educación financiera, finanzas personales, finanzas para principiantes, finanzas para dummies, finanzas para todos, finanzas para emprendedores, finanzas para empresas, finanzas para pymes, finanzas para negocios, finanzas para profesionales, finanzas para estudiantes, finanzas para universitarios, finanzas para autónomos, finanzas para trabajadores, finanzas para empleados',
}

export const metadata: Metadata = {
  title: props.title,
  description: props.description,
  keywords: props.keywords,
  openGraph: {
    title: props.title,
    description: props.description,
    url: 'https://www.pasionfinanzas.com/contact',
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

export default function Contact() {
  return (
    <main className="bg-gray_hero py-12">
      <section className="container mx-auto px-1">
        <div className="flex flex-col gap-12 text-center justify-center items-center">
          <h1 className="text-primary text-4xl font-semibold">CONTACTO</h1>
          <p>
            Si quieres comunicarte con nosotros o recibir una Asesoría
            Especializada, escríbenos en nuestras redes sociales o al correo:
            &nbsp;
            <ContactEmail />
          </p>
          <Image src={'/images/contacto.webp'} width={350} height={350} quality={100} priority alt='Imagen de contacto' className='rounded-md' />
        </div>
      </section>
    </main>
  )
}
