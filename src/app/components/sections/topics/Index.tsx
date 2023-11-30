import { topics } from '@/app/constants/constants'

export const Topics = () => {
  return (
    <section className="bg-[#fefefe] py-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic, index) => {
            return (
              <div className="flex flex-col border gap-4 p-8" key={index}>
                <div className="text-primary text-6xl">{topic.icon}</div>
                <h3 className="text-2xl font-semibold">{topic.title}</h3>
                <p className="text-lg text-secondary">{topic.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
