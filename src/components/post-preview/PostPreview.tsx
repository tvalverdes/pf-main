import { PostMetaData } from '@/types/interfaces';
import Image from 'next/image';
import Link from 'next/link';

const PostPreview = (post: PostMetaData, key: number) => {
  return (
    <li className='bg-gray-200 bg-opacity-50 rounded-lg gap-3 text-start h-full flex max-w-[17.3rem] flex-col'>
      <Image
        src={`/images/posts/${post.image}`}
        width={277.33}
        height={155.99}
        alt={`Portada de ${post.title}`}
        className="rounded-t-lg"
      />
      <div className='flex flex-col justify-between w-full h-full p-4 gap-3'>
        <div>
          <h2 className='text-black font-semibold px-2 text-lg pb-4'>{post.title}</h2>
          <p className='text-secondary text-sm px-2'>{post.subtitle}</p>
        </div>
          <Link href={`/posts/${post.slug}`} rel="noopener noreferrer" 
            className='text-center sm:text-start bg-primary sm:bg-transparent font-semibold text-white sm:text-primary p-2 w-full sm:w-fit rounded-lg'>
            Leer más
          </Link>
      </div>
    </li>
  );
}

export default PostPreview;
