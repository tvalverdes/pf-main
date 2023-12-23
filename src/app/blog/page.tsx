import { getPostsMetadata } from '@/utils/posts'
import PostPreview from '@/components/post-preview/PostPreview'

export default function Blog() {
  const postMetadata = getPostsMetadata()
  const postPreviews = postMetadata.map((post, index) => {
    return <PostPreview key={index} {...post} />
  })
  return (
    <div className="container py-12 mx-auto px-1 grid grid-cols-3">
      {postPreviews}
    </div>
  )
}
