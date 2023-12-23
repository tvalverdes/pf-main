import { PostMetaData } from '@/types/interfaces'
import Image from 'next/image'
import Link from 'next/link'

const PostPreview = (post: PostMetaData, key: number) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <Image
        src={`/images/posts/${post.image}`}
        width={400}
        height={400}
        alt={`Portada de ${post.title}`}
        className="rounded-lg"
      />
      <h2>{post.title}</h2>
      <p>{post.subtitle}</p>
      <p>{post.date}</p>
    </Link>
  )
}

export default PostPreview
