import React, { useEffect, useState } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';
import Sidebar from '../Sidebar/Sidebar';
import './Blog.css';
const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    // const [readTime, setreadTime] = useState([]);
    
    useEffect(() => {
        fetch('brainwave.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    // Onclick button added from SingleBox.jsx;
    const handleMarkasRead = (read_time)=>{
        const previousReadTime = JSON.parse(localStorage.getItem('read-time'))
        if (previousReadTime) {
            const newReadTime = previousReadTime + read_time;
            localStorage.setItem('read-time',newReadTime);
        } else {
            localStorage.setItem('read-time',read_time);
        }
    }
    return (
        <div>
            <div className="blog flex flex-col-reverse lg:flex-row lg:px-12">
                <div className="blog-section lg:px-2">
                {
                    blogs.map(blog=><SingleBlog 
                    key={blog.id}
                    blog={blog}
                    // passing the function to SingleBlog.jsx;
                    handleMarkasRead={handleMarkasRead}
                     />)
                }
                </div>
                <div className="sidebar w-full lg:w-96 mt-8">
                    <Sidebar/>
                </div>
            </div>
        </div>
    );
}

export default Blog;
