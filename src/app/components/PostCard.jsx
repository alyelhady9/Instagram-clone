
import { useState } from 'react';
import Image from 'next/image';
import { BsFillHeartFill } from 'react-icons/bs';
import { FaComment } from 'react-icons/fa';
import { FaRegBookmark, FaBookmark } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSavePost } from '../features/savesSlice';

const PostCard = ({ post }) => {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();
  const savedPosts = useSelector((state) => state.saves.savedPosts);

  const isPostSaved = savedPosts.some((savedPost) => savedPost.id === post.id);

  const handleToggleSave = () => {
    dispatch(toggleSavePost(post));
  };

  return (
    <div 
      className='relative aspect-square cursor-pointer overflow-hidden'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image 
        src={post.image} 
        alt={post.title} 
        layout='fill' 
        objectFit='cover'
      />
      {isHovered && (
        <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300'>
          <div className='flex text-white items-center text-xl font-bold'>
            <div className='flex items-center mx-4'>
              <BsFillHeartFill className='mr-2' />
              <span>123</span>
            </div>
            <div className='flex items-center mx-4'>
              <FaComment className='mr-2' />
              <span>45</span>
            </div>
          </div>
          <div className='absolute top-4 right-4 text-white text-2xl' onClick={handleToggleSave}>
            {isPostSaved ? <FaBookmark /> : <FaRegBookmark />}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCard;