import Image from 'next/image'

export const Hero = () => {
  return (
    <>
      <section className="bg-gray_hero py-12">
        <div className="container mx-auto px-1 flex flex-col gap-8 text-center items-center justify-center">
          <h1 className="text-3xl font-semibold">
            ¿QUÉ ES PASIÓN POR LAS FINANZAS?
          </h1>
          <Image
            src={'/images/logo-foco.webp'}
            width={300}
            height={300}
            alt="Logo de Pasión por las Finanzas"
            quality={100}
            priority
          />
          <p className="sm:w-1/2 text-lg text-secondary">
            Pasión por las Finanzas nació el 2020 con el fin de ayudar a todas
            las personas, sin importar cuál sea su edad, sexo, religión o
            condición, a mejorar sus conocimientos en materia financiera e
            inversión.
          </p>
        </div>
      </section>
    </>
  )
}
