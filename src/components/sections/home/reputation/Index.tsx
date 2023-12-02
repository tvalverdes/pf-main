import { filterTextBySection, reputationList } from '@/types/constants'
import Image from 'next/image'
import { SectionText } from '../../../section-text/Index'

export const Reputation = () => {
  return (
    <section className="bg-gray_dark">
      <div className="container mx-auto px-1">
        <div className="grid sm:grid-cols-2 pt-12 gap-4 sm:pt-28 pb-12">
          <div className="flex flex-col items-center">
            <Image
              src={'/images/greeting.webp'}
              width={500}
              height={540}
              alt="Imagen principal"
              loading="lazy"
              className="img-left"
            />
          </div>

          <div className="flex flex-col gap-12">
            <SectionText {...filterTextBySection('reputacion')} />
            <div>
              {reputationList.map((reputation, index) => {
                return (
                  <div className="flex flex-col gap-4 items-start" key={index}>
                    <h2 className="font-normal text-xl">{reputation.name}</h2>
                    <p className="text-lg pb-8 text-secondary">
                      {reputation.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
