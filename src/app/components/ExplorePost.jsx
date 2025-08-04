

// "use client";

// import React, { useState } from 'react';
// import Image from 'next/image';
// import { HiOutlineDotsHorizontal } from "react-icons/hi";
// import { TbHeart } from "react-icons/tb";

// // Assuming OptimizedImage is a custom component
// // and imageSizes is an object of sizes.
// // Replace these with your actual implementations if they differ.
// const OptimizedImage = Image;
// const imageSizes = {
//     thumbnail: "32px",
//     dialog: "800px",
// };

// function ExplorePost({ post }) {
//     const [showDialog, setShowDialog] = useState(false);
//     const [dialogImageIndex, setDialogImageIndex] = useState(0);

//     const prevDialogImage = () => {
//         setDialogImageIndex((prevIndex) => 
//             prevIndex === 0 ? post.photos.length - 1 : prevIndex - 1
//         );
//     };

//     const nextDialogImage = () => {
//         setDialogImageIndex((prevIndex) => 
//             prevIndex === post.photos.length - 1 ? 0 : prevIndex + 1
//         );
//     };

//     return (
//         <div className='min-h-full'>
//             {/* The trigger for the modal */}
//             <button className='min-h-full' onClick={() => setShowDialog(true)}>
//                 <Image className='min-h-full object-fill' src={post.photos[0]} alt={post.id} width={300} height={300} />
//             </button>

//             {/* The modal itself, visible based on the `showDialog` state */}
//             {showDialog && (
//                 <div className="fixed inset-0 py-2 bg-black/70 flex items-center justify-center z-50">
//                     <button
//                         onClick={() => setShowDialog(false)}
//                         className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-[60]"
//                         aria-label="Close dialog"
//                     >
//                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                             <line x1="18" y1="6" x2="6" y2="18"></line>
//                             <line x1="6" y1="6" x2="18" y2="18"></line>
//                         </svg>
//                     </button>

//                     <div className="bg-white w-7/12 max-md:w-10/12 max-h-[90%] mx-5 my-5 flex rounded overflow-hidden max-md:flex-col">
//                         <div className="w-[60%] max-md:w-full flex-shrink-0 flex items-center justify-center relative bg-black max-md:max-h-[50vh] min-h-[400px]">
//                             {post.photos.length > 1 ? (
//                                 <div className='relative w-full h-full'>
//                                     <div className='overflow-hidden w-full h-full'>
//                                         <div
//                                             className='flex transition-transform duration-300 ease-in-out h-full'
//                                             style={{ transform: `translateX(-${dialogImageIndex * 100}%)` }}
//                                         >
//                                             {post.photos.map((photo, i) => (
//                                                 <div key={i} className='w-full flex-shrink-0 flex items-center justify-center'>
//                                                     <OptimizedImage
//                                                         src={photo}
//                                                         width={800}
//                                                         height={800}
//                                                         alt={post.caption}
//                                                         className="w-full max-h-full object-contain"
//                                                         priority={i === 0}
//                                                         quality={i === dialogImageIndex ? 95 : 85}
//                                                     />
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     </div>
//                                     <button
//                                         onClick={prevDialogImage}
//                                         className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 text-white bg-black/50 rounded-full hover:bg-black/70 transition-colors"
//                                         aria-label="Previous image"
//                                     >
//                                         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                                             <polyline points="15,18 9,12 15,6"></polyline>
//                                         </svg>
//                                     </button>
//                                     <button
//                                         onClick={nextDialogImage}
//                                         className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 text-white bg-black/50 rounded-full hover:bg-black/70 transition-colors"
//                                         aria-label="Next image"
//                                     >
//                                         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                                             <polyline points="9,18 15,12 9,6"></polyline>
//                                         </svg>
//                                     </button>
//                                 </div>
//                             ) : (
//                                 post.photos.map((photo, i) => (
//                                     photo && (
//                                         <div className='w-full h-full flex items-center justify-center' key={i}>
//                                             <OptimizedImage
//                                                 src={photo}
//                                                 width={800}
//                                                 height={800}
//                                                 alt={post.caption}
//                                                 className="w-full max-h-full object-contain"
//                                                 priority={true}
//                                                 quality={95}
//                                             />
//                                         </div>
//                                     )
//                                 ))
//                             )}
//                         </div>

//                         <div className='w-[40%] max-md:w-full bg-white flex flex-col'>
//                             <header className='flex items-center justify-between p-4 border-b'>
//                                 <div className='flex items-center'>
//                                     <div className='w-8 h-8 mr-3 rounded-full border-gray-300 border overflow-hidden'>
//                                         <OptimizedImage
//                                             src={post.user.photo}
//                                             width={32}
//                                             height={32}
//                                             alt={post.user.name}
//                                             className="rounded-full object-cover w-full h-full"
//                                             quality={60}
//                                         />
//                                     </div>
//                                     <p className="font-semibold text-sm">{post.user.name}</p>
//                                 </div>
//                                 <div>
//                                     <HiOutlineDotsHorizontal className='cursor-pointer text-xl text-gray-500' />
//                                 </div>
//                             </header>

//                             <div className='flex-1 overflow-y-auto p-4 noScrollBar'>
//                                 {/* Caption */}
//                                 <div className='flex items-start mb-4'>
//                                     <div className='w-8 h-8 mr-3 rounded-full border-gray-300 border overflow-hidden'>
//                                         <OptimizedImage
//                                             src={post.user.photo}
//                                             width={32}
//                                             height={32}
//                                             alt={post.user.name}
//                                             className="rounded-full object-cover w-full h-full"
//                                             quality={60}
//                                         />
//                                     </div>
//                                     <div className='flex-1'>
//                                         <p className="font-semibold text-sm">{post.user.name} <span className="font-normal text-gray-700">{post.caption}</span></p>
//                                     </div>
//                                 </div>
                                
//                                 {/* Comments */}
//                                 {post.comments.length === 0 ? (
//                                     <p className='text-center text-gray-500 py-8 text-sm'>No comments yet</p>
//                                 ) : (
//                                     <div className="space-y-4">
//                                         {post.comments.map((comment, i) => (
//                                             <div className='flex items-start group' key={i}>
//                                                 <div className='w-8 h-8 mr-3 rounded-full border-gray-300 border overflow-hidden'>
//                                                     <OptimizedImage
//                                                         src={comment.user.photo}
//                                                         width={32}
//                                                         height={32}
//                                                         alt={comment.user.name}
//                                                         className="rounded-full object-cover w-full h-full"
//                                                         quality={60}
//                                                     />
//                                                 </div>
//                                                 <div className="flex-1">
//                                                     <p className='font-semibold text-sm'>{comment.user.name}</p>
//                                                     <p className="text-gray-700 text-sm">{comment.body}</p>
//                                                 </div>
//                                                 <TbHeart className="text-gray-400 text-lg cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity" />
//                                             </div>
//                                         ))}
//                                     </div>
//                                 )}
//                             </div>

//                             <div className='flex items-center p-4 border-t'>
//                                 <input
//                                     type="text"
//                                     className='flex-1 text-sm placeholder-gray-500 border-0 focus:outline-none focus:ring-0 mr-2'
//                                     placeholder='Add a comment...'
//                                 />
//                                 <button className='text-blue-500 font-semibold text-sm hover:text-blue-700'>
//                                     Post
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default ExplorePost;



"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { TbHeart } from "react-icons/tb";
import { useSelector } from 'react-redux';

// Assuming OptimizedImage is a custom component
// and imageSizes is an object of sizes.
const OptimizedImage = Image;
const imageSizes = {
    thumbnail: "32px",
    dialog: "800px",
};

function ExplorePost({ post }) {
    const commentsKey = `comments_${post.id}`;

    // State for managing dialog visibility
    const [showDialog, setShowDialog] = useState(false);
    // State for managing the current image in the dialog carousel
    const [dialogImageIndex, setDialogImageIndex] = useState(0);

    // State to hold the new comment being typed
    const [newComment, setNewComment] = useState('');

    // State for comments, initialized from localStorage
    const [comments, setComments] = useState(() => {
        if (typeof window !== 'undefined') {
            const storedComments = localStorage.getItem(commentsKey);
            const initialComments = post.comments || [];
            // Combine initial comments with any comments stored locally
            return storedComments ? [...initialComments, ...JSON.parse(storedComments)] : initialComments;
        }
        return post.comments || [];
    });

    const isLoggedIn = useSelector(state => state.auth.isAuthenticated);
    const userFromStore = useSelector(state => state.auth.user);

    // Effect to save comments to localStorage whenever the state changes
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const newCommentsOnly = comments.filter(comment => !post.comments.find(pc => pc.id === comment.id));
            localStorage.setItem(commentsKey, JSON.stringify(newCommentsOnly));
        }
    }, [comments, commentsKey, post.comments]);

    const prevDialogImage = () => {
        setDialogImageIndex((prevIndex) => 
            prevIndex === 0 ? post.photos.length - 1 : prevIndex - 1
        );
    };

    const nextDialogImage = () => {
        setDialogImageIndex((prevIndex) => 
            prevIndex === post.photos.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (newComment.trim() === '') return;
        
        // You'll need Redux or another state management solution here to get the logged-in user
        // For now, let's assume a static user if `isLoggedIn` is true
        if (!isLoggedIn) {
            alert('You must be logged in to comment.'); // Or trigger a login modal
            return;
        }

        const comment = {
            id: Date.now(),
            user: { 
                name: userFromStore.username, 
                photo: userFromStore.photo 
            },
            body: newComment,
        };

        setComments(prevComments => [...prevComments, comment]);
        setNewComment('');
    };

    return (
        <div className='min-h-full'>
            {/* The trigger for the modal */}
            <button className='min-h-full' onClick={() => setShowDialog(true)}>
                <Image className='min-h-full object-fill' src={post.photos[0]} alt={post.id} width={300} height={300} />
            </button>

            {/* The modal itself, visible based on the `showDialog` state */}
            {showDialog && (
                <div className="fixed inset-0 py-2 bg-black/70 flex items-center justify-center z-50">
                    <button
                        onClick={() => setShowDialog(false)}
                        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-[60]"
                        aria-label="Close dialog"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>

                    <div className="bg-white w-7/12 max-md:w-10/12 max-h-[90%] mx-5 my-5 flex rounded overflow-hidden max-md:flex-col">
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
                                {/* Caption */}
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
                                
                                {/* Comments */}
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
                                />
                                <button type="submit" className={`text-blue-500 font-semibold text-sm hover:text-blue-700 ${!newComment.trim() ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={!newComment.trim()}>
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

export default ExplorePost;