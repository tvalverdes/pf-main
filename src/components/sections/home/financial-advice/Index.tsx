import Image from 'next/image'
import { SectionText } from '../../../section-text/Index'
import { filterTextBySection } from '@/types/constants'
import { InverstButton } from '@/components/invest-button/Index'

export const FinancialAdvice = () => {
  return (
    <main className="bg-gray_hero">
      <div className="container mx-auto px-1">
        <section className="grid sm:grid-cols-2 pt-12 gap-4 sm:pt-28 pb-12">
          <div className="flex flex-col gap-12">
            <SectionText {...filterTextBySection('asesoria')} />
            <InverstButton />
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
