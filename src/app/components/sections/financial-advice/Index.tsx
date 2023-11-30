import Image from 'next/image'
import { SectionText } from '../../section-text/Index'
import { filterTextBySection } from '../../../constants/constants'
import { Button } from '@chakra-ui/react'

export const FinancialAdvice = () => {
  return (
    <main className="bg-[#e7ecef]">
      <div className="container mx-auto px-1">
        <section className="grid sm:grid-cols-2 pt-12 gap-4 sm:pt-28 pb-12">
          <div className="flex flex-col gap-12">
            <SectionText {...filterTextBySection('asesoria')} />
            <button className="bg-primary font-semibold action-button p-4 rounded-lg">
              APRENDE A INVERTIR
            </button>
          </div>
          <div>
            <Image
              src={'/images/main-image.webp'}
              width={900}
              height={540}
              alt="Imagen principal"
              className="img-right"
            />
          </div>
        </section>
      </div>
    </main>
  )
}
