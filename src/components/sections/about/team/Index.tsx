import { teamList } from '@/types/constants'
import Image from 'next/image'

export const Team = () => {
  return (
    <section className="bg-gray_dark py-12">
      <div className="container mx-auto px-1">
        <h2 className="text-primary text-4xl text-center font-semibold pb-4">
          NUESTRO EQUIPO
        </h2>
        <div className="grid grid-flow-col auto-cols-[max(0, 2fr)]">
          {teamList.map((team, index) => {
            return (
              <div
                className="flex flex-col gap-8 justify-center text-center items-center py-4"
                key={index}
              >
                <Image
                  src={team.img}
                  width={298}
                  height={298}
                  alt={`Imagen de ${team.name}`}
                  quality={100}
                  loading="lazy"
                  className="rounded-full"
                />
                <h3 className="text-3xl font-semibold">{team.name}</h3>
                <p className="w-1/2 text-secondary">{team.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
