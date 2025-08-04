"use client"
import React, { useState, useCallback, useMemo, useEffect } from 'react'
import Image from 'next/image'
import { TbHeart } from "react-icons/tb";
import { FiMessageCircle } from "react-icons/fi";
import { PiPaperPlaneTiltBold } from "react-icons/pi";
import { FiBookmark } from "react-icons/fi"; // Regular save icon
import { FaBookmark } from "react-icons/fa"; // Filled save icon for saved state
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { TbHeartFilled } from "react-icons/tb";
import { useSelector, useDispatch } from 'react-redux';
import { toggleAuthModal } from '../features/AuthModalSlice';
import { toggleSavePost } from '../features/savesSlice'; // Import the save action

function Post({ post }) {
    // Unique keys for localStorage to avoid conflicts
    const likesKey = `likes_${post.id}`;
    const commentsKey = `comments_${post.id}`;

    // Initialize state from localStorage on the client side
    const [liked, setLiked] = useState(() => {
        if (typeof window !== 'undefined') {
            const storedLikes = localStorage.getItem(likesKey);
            return storedLikes ? JSON.parse(storedLikes) : false;
        }
        return false;
    });

    const [comments, setComments] = useState(() => {
        if (typeof window !== 'undefined') {
            const storedComments = localStorage.getItem(commentsKey);
            const initialComments = post.comments || [];
            return storedComments ? [...initialComments, ...JSON.parse(storedComments)] : initialComments;
        }
        return post.comments || [];
    });

    const [showDialog, setShowDialog] = useState(false);
    const [showHoverCard, setShowHoverCard] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [dialogImageIndex, setDialogImageIndex] = useState(0);
    const [loadedImages, setLoadedImages] = useState(new Set());
    const [newComment, setNewComment] = useState('');

    const isLoggedIn = useSelector(state => state.auth.isAuthenticated);
    const userFromStore = useSelector(state => state.auth.user);
    const savedPosts = useSelector(state => state.saves.savedPosts); // Get saved posts from Redux
    const dispatch = useDispatch();
    
    // Check if the current post is saved
    const isPostSaved = savedPosts.some(savedPost => savedPost.id === post.id);

    // Persist likes to localStorage whenever the `liked` state changes
    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem(likesKey, JSON.stringify(liked));
        }
    }, [liked, likesKey]);

    // Persist new comments to localStorage whenever the `comments` state changes
    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Filter out comments that came with the initial post prop
            const newCommentsOnly = comments.filter(comment => !post.comments.find(pc => pc.id === comment.id));
            localStorage.setItem(commentsKey, JSON.stringify(newCommentsOnly));
        }
    }, [comments, commentsKey, post.comments]);

    const openComments = useCallback(() => {
        isLoggedIn ? setShowDialog(true) : dispatch(toggleAuthModal());
    }, [isLoggedIn, dispatch]);

    const handleToggleSave = useCallback(() => {
      if (!isLoggedIn) {
        dispatch(toggleAuthModal());
        return;
      }
      dispatch(toggleSavePost(post));
    }, [isLoggedIn, dispatch, post]);

    const imageSizes = useMemo(() => ({
        feed: "(max-width: 768px) 100vw, 600px",
        dialog: "(max-width: 768px) 100vw, 800px",
        thumbnail: "32px"
    }), []);

    const preloadImage = useCallback((src) => {
        if (!loadedImages.has(src)) {
            const img = new window.Image();
            img.src = src;
            img.onload = () => {
                setLoadedImages(prev => new Set([...prev, src]));
            };
        }
    }, [loadedImages]);

    const toggleLike = useCallback(() => {
        if (!isLoggedIn) {
            dispatch(toggleAuthModal());
            return;
        }
        setLiked(prev => {
            const newLikedState = !prev;
            post.likes += newLikedState ? 1 : -1;
            return newLikedState;
        });
    }, [isLoggedIn, dispatch, post]);

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (newComment.trim() === '') return;
        if (!isLoggedIn) {
            dispatch(toggleAuthModal());
            return;
        }

        const comment = {
            id: Date.now(), // Unique ID for each comment
            user: { name: userFromStore.username, photo: userFromStore.photo },
            body: newComment,
        };

        setComments(prevComments => [...prevComments, comment]);
        setNewComment('');
    };

    const nextImage = useCallback(() => {
        const nextIndex = (currentImageIndex + 1) % post.photos.length;
        setCurrentImageIndex(nextIndex);
        const preloadIndex = (nextIndex + 1) % post.photos.length;
        if (post.photos[preloadIndex]) {
            preloadImage(post.photos[preloadIndex]);
        }
    }, [currentImageIndex, post.photos, preloadImage]);

    const prevImage = useCallback(() => {
        const prevIndex = (currentImageIndex - 1 + post.photos.length) % post.photos.length;
        setCurrentImageIndex(prevIndex);
        const preloadIndex = (prevIndex - 1 + post.photos.length) % post.photos.length;
        if (post.photos[preloadIndex]) {
            preloadImage(post.photos[preloadIndex]);
        }
    }, [currentImageIndex, post.photos, preloadImage]);

    const nextDialogImage = useCallback(() => {
        const nextIndex = (dialogImageIndex + 1) % post.photos.length;
        setDialogImageIndex(nextIndex);
        const preloadIndex = (nextIndex + 1) % post.photos.length;
        if (post.photos[preloadIndex]) {
            preloadImage(post.photos[preloadIndex]);
        }
    }, [dialogImageIndex, post.photos, preloadImage]);

    const prevDialogImage = useCallback(() => {
        const prevIndex = (dialogImageIndex - 1 + post.photos.length) % post.photos.length;
        setDialogImageIndex(prevIndex);
        const preloadIndex = (prevIndex - 1 + post.photos.length) % post.photos.length;
        if (post.photos[preloadIndex]) {
            preloadImage(post.photos[preloadIndex]);
        }
    }, [dialogImageIndex, post.photos, preloadImage]);

    const OptimizedImage = ({ src, alt, width, height, className, sizes, priority = false, quality = 75 }) => (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={className}
            sizes={sizes}
            priority={priority}
            quality={quality}
            loading={priority ? "eager" : "lazy"}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+sl+gamvPw=="
        />
    );

    return (
        <div className='text-gray-900 w-full text-sm mt-4 z-0' key={post.id}>
            <div className='w-full flex justify-between items-center mb-4'>
                <div className='flex items-center'>
                    <div className='w-8 h-8 mr-3 rounded-full border-gray-300 border-[1px] overflow-hidden'>
                        <OptimizedImage
                            src={post.user.photo}
                            width={32}
                            height={32}
                            alt={post.user.name}
                            className="-z-10 rounded-full object-cover"
                            sizes={imageSizes.thumbnail}
                            quality={60}
                        />
                    </div>
                    <div className='flex'>
                        <div className='relative'>
                            <p
                                className='cursor-pointer mr-1 font-semibold'
                                onMouseEnter={() => setShowHoverCard(true)}
                                onMouseLeave={() => setShowHoverCard(false)}
                            >
                                {post.user.name}
                            </p>
                            {showHoverCard && (
                                <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-3 z-0">
                                    <div className='flex items-center'>
                                        <div className='w-8 h-8 mr-3 rounded-full border-gray-300 border-[1px] overflow-hidden'>
                                            <OptimizedImage
                                                src={post.user.photo}
                                                width={32}
                                                height={32}
                                                alt={post.user.name}
                                                className="rounded-full object-cover"
                                                sizes={imageSizes.thumbnail}
                                                quality={60}
                                            />
                                        </div>
                                        <p className='cursor-pointer mr-1 font-semibold'>{post.user.name}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                        <p className='mr-1 text-gray-500'>•</p>
                        <p className='mr-1 text-gray-500'>{post.timestamp}</p>
                    </div>
                </div>
                <div>
                    <HiOutlineDotsHorizontal className='cursor-pointer text-2xl' />
                </div>
            </div>

            <div className='w-full rounded-md aspect-square overflow-hidden bg-gray-100'>
                {post.photos.length > 1 ? (
                    <div className='relative w-full h-full'>
                        <div className='overflow-hidden rounded-sm w-full h-full'>
                            <div
                                className='flex transition-transform duration-300 ease-in-out h-full'
                                style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                            >
                                {post.photos.map((photo, i) => (
                                    <div key={i} className='w-full h-full flex-shrink-0'>
                                        <OptimizedImage
                                            src={photo}
                                            width={600}
                                            height={600}
                                            alt={post.caption}
                                            className="w-full h-full object-cover"
                                            sizes={imageSizes.feed}
                                            priority={i === 0}
                                            quality={i === currentImageIndex ? 85 : 75}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md z-0 hover:bg-white transition-colors"
                            aria-label="Previous image"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="15,18 9,12 15,6"></polyline>
                            </svg>
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md z-0 hover:bg-white transition-colors"
                            aria-label="Next image"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="9,18 15,12 9,6"></polyline>
                            </svg>
                        </button>

                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                            {post.photos.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentImageIndex(i)}
                                    className={`w-2 h-2 rounded-full transition-colors ${
                                        i === currentImageIndex ? 'bg-white' : 'bg-white/50'
                                    }`}
                                    aria-label={`Go to image ${i + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    post.photos.map((photo, i) => (
                        photo ? (
                            <div className='w-full h-full z-0' key={i}>
                                <OptimizedImage
                                    src={photo}
                                    width={600}
                                    height={600}
                                    alt={post.caption}
                                    className="w-full h-full object-cover"
                                    sizes={imageSizes.feed}
                                    priority={true}
                                    quality={85}
                                />
                            </div>
                        ) : null
                    ))
                )}
            </div>

            <div className='flex justify-between mt-2 mb-2'>
                <div className='flex'>
                    <div className='mr-2' onClick={toggleLike}>
                        {
                            liked ? (
                                <TbHeartFilled className='text-red-500 cursor-pointer text-3xl' />
                            ) : (
                                <TbHeart className='hover:text-gray-500 cursor-pointer text-3xl' />
                            )
                        }
                    </div>
                    <div className='mr-2'>
                        <FiMessageCircle
                            className='hover:text-gray-500 cursor-pointer text-3xl'
                            onClick={openComments}
                        />
                    </div>
                    <div className='mr-2'>
                        <PiPaperPlaneTiltBold className='hover:text-gray-500 cursor-pointer text-[1.7rem]' />
                    </div>
                </div>
                <div onClick={handleToggleSave}>
                    {isPostSaved ? (
                        <FaBookmark className='text-gray-900 cursor-pointer text-3xl' />
                    ) : (
                        <FiBookmark className='hover:text-gray-500 cursor-pointer text-3xl' />
                    )}
                </div>
            </div>

            <div className='font-semibold my-2'>
                {post.likes + (liked ? 1 : 0)} likes
            </div>

            <div className='flex'>
                <span className='mr-2 font-semibold'>
                    {post.user.name}
                </span>
                <span>{post.caption}</span>
            </div>

            <div className='flex text-gray-500 my-2'>
                <span className='mr-2'>
                    <button
                        onClick={openComments}
                        className='hover:text-gray-700'
                    >
                        View all {comments.length} comments
                    </button>
                </span>
            </div>

            {/* Comment input field on the main feed */}
            <form onSubmit={handleCommentSubmit} className='flex items-center'>
                <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className='placeholder-gray-500 border-0 focus:outline-none pb-4 w-full'
                    placeholder='Add a comment...'
                    disabled={!isLoggedIn}
                />
                <button
                    type="submit"
                    className={`text-blue-500 font-semibold text-sm hover:text-blue-700 ${!isLoggedIn || newComment.trim() === '' ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={!isLoggedIn || newComment.trim() === ''}
                >
                    Post
                </button>
            </form>
            <hr className='border-gray-300' />

            {/* Dialog Modal */}
            {showDialog && (
                <div className="fixed inset-0 py-2 bg-black/70 flex items-center justify-center z-50">
                    <button
                        onClick={() => setShowDialog(false)}
                        className="fixed top-4 right-4 max-md:top-20 text-white hover:text-gray-300 transition-colors z-[100]"
                        aria-label="Close dialog"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>

                    <div className="bg-white max-h-[90%] max-md:-mt-20 w-7/12 max-md:w-full max-md:h-[50%] mx-5 my-5 max-md:my-0 max-md:rounded-none flex rounded overflow-hidden max-md:flex-col">
                        <div className="w-[60%] max-md:w-full flex-shrink-0 flex items-center justify-center relative bg-black max-md:max-h-[50vh] min-h-[400px]">
                            {post.photos.length > 1 ? (
                                <div className='relative w-full h-full'>
                                    <div className='overflow-hidden w-full h-full'>
                                        <div
                                            className='flex transition-transform duration-300 ease-in-out h-full'
                                            style={{ transform: `translateX(-${dialogImageIndex * 100}%)` }}
                                        >
                                            {post.photos.map((photo, i) => (
                                                <div key={i} className='w-full flex-shrink-0 flex items-center justify-center'>
                                                    <OptimizedImage
                                                        src={photo}
                                                        width={800}
                                                        height={800}
                                                        alt={post.caption}
                                                        className="w-full max-h-full object-contain"
                                                        priority={i === 0}
                                                        quality={i === dialogImageIndex ? 95 : 85}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <button
                                        onClick={prevDialogImage}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 text-white bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                                        aria-label="Previous image"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <polyline points="15,18 9,12 15,6"></polyline>
                                        </svg>
                                    </button>
                                    <button
                                        onClick={nextDialogImage}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 text-white bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                                        aria-label="Next image"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <polyline points="9,18 15,12 9,6"></polyline>
                                        </svg>
                                    </button>
                                </div>
                            ) : (
                                post.photos.map((photo, i) => (
                                    photo && (
                                        <div className='w-full h-full flex items-center justify-center' key={i}>
                                            <OptimizedImage
                                                src={photo}
                                                width={800}
                                                height={800}
                                                alt={post.caption}
                                                className="w-full max-h-full object-contain"
                                                priority={true}
                                                quality={95}
                                            />
                                        </div>
                                    )
                                ))
                            )}
                        </div>

                        <div className='w-[40%] max-md:w-full bg-white flex flex-col'>
                            <header className='flex items-center justify-between p-4 border-b'>
                                <div className='flex items-center'>
                                    <div className='w-8 h-8 mr-3 rounded-full border-gray-300 border overflow-hidden'>
                                        <OptimizedImage
                                            src={post.user.photo}
                                            width={32}
                                            height={32}
                                            alt={post.user.name}
                                            className="rounded-full object-cover w-full h-full"
                                            quality={60}
                                        />
                                    </div>
                                    <p className="font-semibold text-sm">{post.user.name}</p>
                                </div>
                                <div>
                                    <HiOutlineDotsHorizontal className='cursor-pointer text-xl text-gray-500' />
                                </div>
                            </header>

                            <div className='flex-1 overflow-y-auto p-4 noScrollBar'>
                                <div className='flex items-start mb-4'>
                                    <div className='w-8 h-8 mr-3 rounded-full border-gray-300 border overflow-hidden'>
                                        <OptimizedImage
                                            src={post.user.photo}
                                            width={32}
                                            height={32}
                                            alt={post.user.name}
                                            className="rounded-full object-cover w-full h-full"
                                            quality={60}
                                        />
                                    </div>
                                    <div className='flex-1'>
                                        <p className="font-semibold text-sm">{post.user.name} <span className="font-normal text-gray-700">{post.caption}</span></p>
                                    </div>
                                </div>

                                {/* Comments from local state */}
                                { comments.length === 0 ? (
                                    <p className='text-center text-gray-500 py-8 text-sm'>No comments yet</p>
                                ) : (
                                    <div className="space-y-4">
                                        {comments.map((comment, i) => (
                                            <div className='flex items-start group' key={comment.id || i}>
                                                <div className='w-8 h-8 mr-3 rounded-full border-gray-300 border overflow-hidden'>
                                                    <OptimizedImage
                                                        src={comment.user.photo}
                                                        width={32}
                                                        height={32}
                                                        alt={comment.user.name}
                                                        className="rounded-full object-cover w-full h-full"
                                                        quality={60}
                                                    />
                                                </div>
                                                <div className="flex-1">
                                                    <p className='font-semibold text-sm'>{comment.user.name}</p>
                                                    <p className="text-gray-700 text-sm">{comment.body}</p>
                                                </div>
                                                <TbHeart className="text-gray-400 text-lg cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <form onSubmit={handleCommentSubmit} className='flex items-center p-4 border-t'>
                                <input
                                    type="text"
                                    value={newComment}
                                    onChange={(e) => setNewComment(e.target.value)}
                                    className='flex-1 text-sm placeholder-gray-500 border-0 focus:outline-none focus:ring-0 mr-2'
                                    placeholder='Add a comment...'
                                    disabled={!isLoggedIn}
                                />
                                <button
                                    type="submit"
                                    className={`text-blue-500 font-semibold text-sm hover:text-blue-700 ${!isLoggedIn || newComment.trim() === '' ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    disabled={!isLoggedIn || newComment.trim() === ''}
                                >
                                    Post
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Post;