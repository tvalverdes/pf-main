import getPostsMetadata from '@/utils/posts'
import PostPreview from '@/components/post-preview/PostPreview'
import { Metadata } from 'next'

const props = {
  title: 'Blog',
  description: 'Artículos sobre finanzas personales, educación financiera y emprendimiento para tu crecimiento financiero',
  keywords: 'finanzas, educación financiera, finanzas personales, finanzas para principiantes, finanzas para dummies, finanzas para todos, finanzas para emprendedores, finanzas para empresas, finanzas para pymes, finanzas para negocios, finanzas para profesionales, finanzas para estudiantes, finanzas para universitarios, finanzas para autónomos, finanzas para trabajadores, finanzas para empleados',
}

export const metadata: Metadata = {
  title: props.title,
  description: props.description,
  keywords: props.keywords,
  openGraph: {
    title: props.title,
    description: props.description,
    url: 'https://www.pasionfinanzas.com/blog',
    type: 'website',
    images: [
      {
        url: 'https://www.pasionfinanzas.com/images/og_image.webp',
        width: 1200,
        height: 630,
        alt: props.title,
      },
    ],
  },
  }

const getArticles = () => {
  const postMetadata = getPostsMetadata()
  const sortedPostMetadata = postMetadata.sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf())
  return sortedPostMetadata.map((post) => {
    return <PostPreview key={post.slug} {...post} />
  })
}

export default function Blog() {
  const postPreviews = getArticles()
  return (
    <div className='bg-slate-50'>
    <main className="container py-12 mx-auto px-1 text-center">
      <h1 className="text-primary text-4xl font-semibold break-words">Artículos Financieros</h1>
      <p className='text-gray-500 py-6'>Resuelve tus problemas por la falta de dinero con estas ideas y tips</p>
      <div className="flex">
      <section className="flex px-4 w-full mx-auto max-w-screen-2xl">
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto w-full max-w-4xl sm:place-items-start place-items-center
'>        
      {postPreviews}
        </ul>
      </section>
      </div>
    </main>
    </div>
  )
}
