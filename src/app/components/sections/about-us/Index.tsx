import Image from 'next/image'
import { SectionText } from '../../section-text/Index'
import { filterTextBySection } from '@/app/types/constants'
import { Divider } from '@chakra-ui/react'

export const AboutUs = () => {
  return (
    <section className="bg-[#fefefe]">
      <div className="container mx-auto px-1">
        <div className="grid sm:grid-cols-2 pt-12 gap-4 sm:pt-28 pb-12">
          <div className="flex flex-col items-center">
            <Image
              src={'/images/point-down.webp'}
              width={900}
              height={540}
              alt="Imagen principal"
              loading="lazy"
              className="img-left"
            />
            <button className="bg-primary font-semibold action-button p-4 -mt-4 sm:-mt-8 ms-8 rounded-lg">
              APRENDE A INVERTIR
            </button>
          </div>

          <div className="flex flex-col gap-12">
            <SectionText {...filterTextBySection('nosotros')} />
            <p className="text-3xl sign">Andrés Valverde</p>
          </div>
        </div>
        <Divider className="pt-12" />
      </div>
    </section>
  )
}
