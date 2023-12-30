import YouTubeVideo from '@/components/youtube-video/Index'
import getPostsMetadata from '@/utils/posts'
import fs from 'fs'
import matter from 'gray-matter'
import Markdown from 'markdown-to-jsx'
import Image from 'next/image'
import { PostMetadata } from '@/types/types'

const getPostContent = (slug: string) => {
  const folder = 'src/app/posts/'
  const file = `${folder}${slug}.md`
  const content =  fs.readFileSync(file, 'utf8')
  const matterResult = matter(content)
  return matterResult
}

export const generateStaticParams = () => {
  try {
    const post = getPostsMetadata()
  return post.map((post) => {
    slug: post.slug
  })
  } catch (error) {
    console.error(error)
    return[]
  }
  
}

const author = {
  name: 'Andrés Valverde',
  picture: '/images/andres_valverde.webp',
  bio: 'Ingeniero de Sistemas, Asesor Financiero',
}

const PostPage = (props: any) => {
  const slug = props.params.slug
  const post = getPostContent(slug)
  const postMetaData = post.data as PostMetadata
  const date: Date = new Date(post.data.date)
  const articleDate = date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  return (
    <main className='bg-slate-50'>
    <div className="container mx-auto px-1 py-12 antialiased">
      <div className='flex justify-between px-4 mx-auto max-w-screen-xl'>
        <article className='mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue'>
        <address className="flex items-center mb-6 not-italic">
                  <div className="inline-flex items-center mr-3 text-sm text-gray-900">
                      <Image width={200} height={200} className="mr-4 w-16 h-16 rounded-full" src={author.picture} alt="Andrés Valverde" />
                      <div>
                          <p rel="author" className="text-xl font-bold text-gray-900">{author.name}</p>
                          <p className="text-base text-gray-500 ">{author.bio}</p>
                          <p className="text-base text-gray-500 "><time dateTime={postMetaData.date} title="February 8th, 2022">{articleDate}</time></p>
                      </div>
                  </div>
              </address>
      <div id='article'>

      <h1 className="text-4xl font-semibold">{postMetaData.title}</h1>

      {/* postMetaData.youtubeId ? <YouTubeVideo videoId={postMetaData.youtubeId} autoPlay={true}  /> : null */}
      <Markdown>{post.content}</Markdown>
      </div>
        </article>

      </div>
    </div>
    </main>
  )
}

export default PostPage
