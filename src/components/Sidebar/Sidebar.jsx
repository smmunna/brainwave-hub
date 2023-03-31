import React, { useEffect, useState } from 'react';
import './Sidebar.css';
const Sidebar = ({ readTime, bookmarked }) => {
    const [getreadTime, setgetReadTime] = useState(readTime);
    const [counter, setCounter] = useState(0);
    
    useEffect(() => {
        const getReadTime = JSON.parse(localStorage.getItem('read-time'));
        setgetReadTime(getReadTime)
    }, [readTime]);

    useEffect(() => {
        setCounter(bookmarked.length)
    }, [bookmarked])

    return (
        <div>
            <div className="spent-time text-center">
                <h2>Spent time on read: {getreadTime ? getreadTime : 0} min</h2>
            </div>
            {/* BookedMarked Blogs */}
            <div className='bookmarked-blog mt-5 p-7'>
                <h2>Bookmarked Blogs: {counter} </h2>
                {
                    bookmarked.map(bookmark => <>
                        <div className='bookmarked-text' key={counter}>
                            {bookmark}
                        </div>
                    </>)
                }
            </div>
        </div>
    );
}

export default Sidebar;
