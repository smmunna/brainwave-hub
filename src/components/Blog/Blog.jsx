import React, { useEffect, useState } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';
import Sidebar from '../Sidebar/Sidebar';
import './Blog.css';
const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('brainwave.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div>
            <div className="blog flex flex-col-reverse lg:flex-row lg:px-12">
                <div className="blog-section w-full lg:px-12">
                {
                    blogs.map(blog=><SingleBlog 
                    key={blog.id}
                    blog={blog}
                     />)
                }
                </div>
                <div className="sidebar w-full lg:w-96 p-4">
                    <Sidebar />
                </div>
            </div>
        </div>
    );
}

export default Blog;
