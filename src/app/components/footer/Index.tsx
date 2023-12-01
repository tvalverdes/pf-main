import { Socials } from '../socials/Index'
import { WebLinks } from '../web-links/Index'

export const Footer = () => {
  return (
    <footer className="bg-[#fefefe] py-12">
      <div className="container mx-auto px-1 py-4 text-blue-900">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          <div>
            <h2 className="pb-2">SITIO</h2>
            <ul className="flex flex-col gap-4">
              <WebLinks />
            </ul>
          </div>
          <div>
            <h2 className="pb-2">REDES</h2>
            <ul className="flex flex-col gap-4">
              <Socials />
            </ul>
          </div>
          <div>
            <h2 className="pb-2">CONTACTO</h2>
            <p>
              Ante cualquier duda o si deseas una Asesoría Personalizada,
              comunícate con nosotros a
            </p>
            <a
              className="nav__link grid w-fit"
              href="mailto:contacto@pasionporlasfinanzas.com"
            >
              contacto@pasionporlasfinanzas.com
            </a>
          </div>
        </div>
        <div className="flex w-full justify-center items-center pt-8">
          © {new Date().getFullYear()} Pasión por las Finanzas
        </div>
      </div>
    </footer>
  )
}
