import { getPostsMetadata } from '@/utils/posts'
import fs from 'fs'
import matter from 'gray-matter'
import Markdown from 'markdown-to-jsx'
const getPostContent = (slug: string) => {
  const folder = 'src/posts/'
  const file = `${folder}${slug}.md`
  const content = fs.readFileSync(file, 'utf8')
  const matterResult = matter(content)
  return matterResult
}

export const generateStaticParams = async () => {
  const post = getPostsMetadata()
  return post.map((post) => {
    slug: post.slug
  })
}

const PostPage = (props: any) => {
  const slug = props.params.slug
  const post = getPostContent(slug)
  return (
    <div className="container mx-auto px-1 py-12">
      <h1 className="text-2xl font-semibold">{post.data.title}</h1>

      <Markdown>{post.content}</Markdown>
    </div>
  )
}

export default PostPage
