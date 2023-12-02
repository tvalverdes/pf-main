import { goalsList } from '@/types/constants'
import Image from 'next/image'

export const Goals = () => {
  return (
    <section className="bg-gray_light py-12">
      <div className="container mx-auto px-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {goalsList.map((goal, index) => {
          return (
            <div
              className="flex flex-col justify-start items-center gap-8 p-4 sm:p-12"
              key={index}
            >
              <h2>{goal.name}</h2>
              <Image
                src={goal.img}
                width={100}
                quality={100}
                height={100}
                alt={`Imagen de ${goal.name} de la empresa`}
              />
              <p>{goal.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
