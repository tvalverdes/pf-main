import { ContactEmail } from '@/components/contact-email/Index'

export default function Contact() {
  return (
    <main className="bg-gray_hero py-12">
      <section className="container mx-auto px-1">
        <div className="flex flex-col gap-12 text-center">
          <h1 className="text-primary text-4xl font-semibold">CONTACTO</h1>
          <p>
            Si quieres comunicarte con nosotros o recibir una Asesoría
            Especializada, escríbenos en nuestras redes sociales o al correo:
            &nbsp;
            <ContactEmail />
          </p>
        </div>
				<div className='flex justify-center items-center'>
					
				</div>
      </section>
    </main>
  )
}
