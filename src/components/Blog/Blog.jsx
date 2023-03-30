import React, { useEffect, useState } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';
import Sidebar from '../Sidebar/Sidebar';
import './Blog.css';
const Blog = () => {
    const[blogs,setBlogs]=useState([]);
    useEffect(()=>{
        fetch('brainwave.json')
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])
    return (
        <div>
            <div className="blog flex flex-col-reverse lg:flex-row px-12">
                <div className="blog-section w-full px-12">
                    <SingleBlog/>
                </div>
                <div className="sidebar w-full lg:w-96 p-4">
                    <Sidebar/>
                </div>
            </div>
        </div>
    );
}

export default Blog;
