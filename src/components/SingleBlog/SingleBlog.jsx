import React from 'react';
import './SingleBlog.css'
const SingleBlog = () => {
    return (
        <div>
            <div className="single-card p-5">
                <div>
                    <img className='rounded-3xl h-96 w-full' src="https://img.freepik.com/free-photo/programming-script-text-coding-word_53876-64939.jpg?w=1060&t=st=1680188016~exp=1680188616~hmac=84085b8952e2d5703b719ab679ea772ad14f431ca321ebafec401b8359946398" alt="blogImg" />
                </div>
                <div className='flex justify-between items-center mt-5'>
                    <div className='flex items-center gap-4'>
                        <div>
                            <img className='w-16 rounded-full' src="https://yt3.googleusercontent.com/ytc/AL5GRJXZ3bjEdOHILjVQpNk6GPlLUrQspEoY4EIhN9hA4g=s900-c-k-c0x00ffffff-no-rj" alt="SmMunna" />
                        </div>
                        <div>
                            <h2 className='username'>SM Munna</h2>
                            <p className='date-text'>March 14, 2023</p>
                        </div>
                    </div>
                    <div>
                        <div>05 Minit to read</div>
                        <div>Bookmarks icon</div>
                    </div>
                </div>
                <div className='my-3'>
                    <h2 className='text-4xl font-bold'>How to get your first job as a self-taught programmer</h2>
                </div>
                <div className='hashtag mb-2'>
                    #beginner #programming #nothing
                </div>
                <div className='marks-as-read'>
                    <a href="#">Mark as read</a>
                </div>
            </div>
        </div>
    );
}

export default SingleBlog;
