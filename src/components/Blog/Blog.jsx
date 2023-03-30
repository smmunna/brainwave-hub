import React from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';
import Sidebar from '../Sidebar/Sidebar';
import './Blog.css';
const Blog = () => {
    return (
        <div>
            <div className="blog flex flex-col-reverse lg:flex-row">
                <div className="blog-section w-full">
                    <SingleBlog/>
                </div>
                <div className="sidebar w-full lg:w-96">
                    <Sidebar/>
                </div>
            </div>
        </div>
    );
}

export default Blog;
