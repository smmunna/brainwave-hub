import React, { useEffect, useState } from 'react';
import './Sidebar.css';
const Sidebar = ({ readTime, bookmarked }) => {
    const [getreadTime, setgetReadTime] = useState(readTime);
    // const[counter,setCounter]=useState(0);
    // const[bookmarkItem,setBookmarkItem]=useState("");
    useEffect(() => {
        const getReadTime = JSON.parse(localStorage.getItem('read-time'));
        setgetReadTime(getReadTime)
    }, [readTime]);

    console.log(bookmarked)

    return (
        <div>
            <div className="spent-time text-center">
                <h2>Spent time on read: {getreadTime ? getreadTime : 0} min</h2>
            </div>
            {/* BookedMarked Blogs */}
            <div className='bookmarked-blog mt-5 p-7'>
                <h2>Bookmarked Blogs: </h2>
                {
                    bookmarked.map(bookmark => <>
                        <div className='bookmarked-text'>
                            {bookmark}
                        </div>
                    </>)
                }

            </div>
        </div>
    );
}

export default Sidebar;
