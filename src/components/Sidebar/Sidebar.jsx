import React, { useEffect, useState } from 'react';
import './Sidebar.css';
const Sidebar = ({ readTime }) => {
    const [getreadTime, setgetReadTime] = useState(readTime);
    useEffect(() => {
        const getReadTime = JSON.parse(localStorage.getItem('read-time'));
        setgetReadTime(getReadTime)
    }, [readTime])
    return (
        <div>
            <div className="spent-time text-center">
                <h2>Spent time on read: {getreadTime ? getreadTime : 0} min</h2>
            </div>
            {/* BookedMarked Blogs */}
            <div className='bookmarked-blog mt-5 p-7'>
                <h2>Bookmarked Blogs: 8</h2>
                <div className='bookmarked-text'>
                    Master MicroSoft Power Platfor and Become and in Demand !
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
