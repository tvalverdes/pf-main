import { bookList, filterTextBySection } from '@/app/types/constants'
import { SectionText } from '../../section-text/Index'
import Image from 'next/image'

export const BooksRecommended = () => {
  return (
    <section className="bg-[#eef1f3] py-12">
      <div className="container mx-auto px-1 ">
        <div className="flex flex-col justify-center gap-4 items-center">
          <SectionText {...filterTextBySection('libros')} />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 place-items-center">
          {bookList.map((book, index) => {
            return (
              <div className="py-2 px-1" key={index}>
                <a href={book.href} rel="noopener noreferrer" target="_blank">
                  <Image
                    src={book.image}
                    width={250}
                    height={385}
                    alt={`Portada del libro: ${book.title}`}
                    title={book.title}
                    quality={100}
                    loading="lazy"
                  />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
