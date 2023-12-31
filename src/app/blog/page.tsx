import getPostsMetadata from '@/utils/posts'
import PostPreview from '@/components/post-preview/PostPreview'

export default function Blog() {
  const postMetadata = getPostsMetadata()
  const sortedPostMetadata = postMetadata.sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf())
  const postPreviews = sortedPostMetadata.map((post) => {
    return <PostPreview key={post.slug} {...post} />
  })
  return (
    <div className='bg-slate-50'>
    <main className="container py-12 mx-auto px-1 text-center">
      <h1 className="text-primary text-4xl font-semibold">Artículos Financieros</h1>
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
