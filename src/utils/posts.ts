import { PostMetaData } from '@/types/interfaces'
import fs from 'fs'
import matter from 'gray-matter'

export const getPostsMetadata = (
  page: number = 1,
  postsPerPage: number = 1
): PostMetaData[] => {
  const folder = 'src/posts/'
  const files = fs.readdirSync(folder)
  // console.log(files)
  const markdownPosts = files.filter((file) => file.endsWith('.md'))
/*
  const startIndex = (page - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage */

  //const paginatedPosts = markdownPosts.slice(startIndex, endIndex)

  const cantidad = fs.readdirSync('src/posts').length
  console.log(cantidad)
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`src/posts/${fileName}`, 'utf8')
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

/* export const getPostsMetadata = (): PostMetaData[] => {
  const folder = 'src/posts/'
  const files = fs.readdirSync(folder)
  const markdownPosts = files.filter((file) => file.endsWith('.md'))
  const cantidad = fs.readdirSync('src/posts').length
  console.log(cantidad)
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`src/posts/${fileName}`, 'utf8')
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
 */
