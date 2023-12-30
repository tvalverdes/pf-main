import { PostMetaData } from '@/types/interfaces'
import fs from 'fs'
import matter from 'gray-matter'

const getPostsMetadata = (): PostMetaData[] => {
  const folder = 'app/posts/'
  const files = fs.readdirSync(folder)
  const markdownPosts = files.filter((file) => file.endsWith('.md'))

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`app/posts/${fileName}`, 'utf8')
    const matterResult = matter(fileContents)
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace('.md', ''),
      image: matterResult.data.image,
    }
  })
  return posts
}

export default getPostsMetadata