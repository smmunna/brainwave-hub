import React, { useEffect, useState } from 'react';
import './Sidebar.css';
const Sidebar = ({readTime}) => {
    const[getreadTime,setgetReadTime]=useState(readTime);
   useEffect(()=>{
    const getReadTime = JSON.parse(localStorage.getItem('read-time'));
    setgetReadTime(getReadTime)
   },[readTime])
    return (
        <div>
            <div className="spent-time">
                <h2>Spent time on read: {getreadTime?getreadTime:0} min</h2>
            </div>
        </div>
    );
}

export default Sidebar;
