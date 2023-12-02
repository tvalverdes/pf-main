import Link from 'next/link'

function NotFound() {
  return (
    <main>
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
        <div className="max-w-lg mx-auto space-y-3 text-center">
          <h3 className="text-primary font-semibold">Error 404</h3>
          <p className="text-gray-800 text-4xl font-semibold sm:text-5xl">
            Página no encontrada
          </p>
          <p className="text-secondary">
            Lo sentimos, la página que estás buscando no se pudo encontrar o ha
            sido removida.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="block py-2 px-4 text-white font-medium bg-primary action-button rounded-lg"
            >
              Regresar
            </Link>
            <Link
              href="/contact"
              className="block py-2 px-4 text-gray-700 hover:bg-gray-50 font-medium duration-150 active:bg-gray-100 border rounded-lg"
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default NotFound
