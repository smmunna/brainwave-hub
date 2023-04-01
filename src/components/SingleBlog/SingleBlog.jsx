import React, { useState } from 'react';
import './SingleBlog.css';

const bookmarkColor = {
    color: "black"
}
const SingleBlog = ({ blogs, blog, handleMarkasRead, handleBookmarkedBlog }) => {
    const { id, author_name, blog_title, author_img, blog_cover, read_time, published_date } = blog;

    // Bookmark Fill color change;
    const [isBookmarkColor, setIsBookMarkColor] = useState(false);
    const handleBookmarkColor = () => {
        setIsBookMarkColor(!isBookmarkColor);
        // console.log(blogs)
    }

    return (
        <div>
            <div className="single-card p-5">
                <div>
                    <img className='rounded-3xl lg:h-96 w-full' src={blog_cover} alt="blogImg" />
                </div>
                <div className='flex justify-between items-center mt-5'>
                    <div className='flex items-center gap-4'>
                        <div>
                            <img className='w-16 rounded-full' src={author_img} alt="SmMunna" />
                        </div>
                        <div>
                            <h2 className='username'>{author_name}</h2>
                            <p className='date-text'>{published_date}</p>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <div>0{read_time} Minutes to read</div>
                        <div className='bookmark-icon'>
                            <span>
                                <span onClick={() => handleBookmarkedBlog(blog_title)} className='cursor-pointer' style={bookmarkColor} title='Add to Bookmark'>
                                    <svg onClick={() => handleBookmarkColor()} xmlns="http://www.w3.org/2000/svg" fill={isBookmarkColor ? 'black' : 'none'} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                    </svg>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='my-3'>
                    <h2 className='lg:text-4xl font-bold'>{blog_title}</h2>
                </div>
                <div className='hashtag mb-2'>
                    #beginner #programming #nothing
                </div>
                <div className='marks-as-read'>
                    {/* Pass to the function handleMarkasRead() in Blog.jsx file */}
                    <a className='cursor-pointer' onClick={() => handleMarkasRead(read_time)}>Mark as read</a>
                </div>
            </div>

            <hr className='custom-divider' />
        </div>
    );
}

export default SingleBlog;
