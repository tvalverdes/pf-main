import { filterTextBySection, statisticsList } from '@/app/types/constants'
import { SectionText } from '../../section-text/Index'
import { Divider } from '@chakra-ui/react'

export const Statistics = () => {
  return (
    <section className="bg-[#fefefe] py-20">
      <div className="container mx-auto gap-12 px-1">
        <div className="flex flex-col gap-10">
          <SectionText {...filterTextBySection('estadisticas')} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {statisticsList.map((statistic, index) => {
            return (
              <div
                className="grid grid-cols-[30%_70%] items-center p-6 border rounded-lg mx-1 my-1"
                key={index}
              >
                <div>
                  <h2 className="text-6xl text-primary">{statistic.icon}</h2>
                </div>
                <div>
                  <p className="text-2xl font-semibold">{statistic.title}</p>
                  <p className="text-lg text-secondary">
                    {statistic.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
        <Divider className="py-16" />
      </div>
    </section>
  )
}
