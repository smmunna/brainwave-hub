import React from 'react';
import './SingleBlog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
const bookmarkColor = {
    color: "red"
}
const SingleBlog = ({ blog,handleMarkasRead }) => {
    const { id, author_name, blog_title, author_img, blog_cover, read_time, published_date } = blog;
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
                            <FontAwesomeIcon className='cursor-pointer' style={bookmarkColor} title='Add to Bookmark' icon={faBookmark} />
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
                    <a onClick={()=>handleMarkasRead(id)}>Mark as read</a>
                </div>
            </div>

            <hr className='custom-divider' />
        </div>
    );
}

export default SingleBlog;
