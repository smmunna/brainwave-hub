import React from 'react';
import State from '../../images/state.PNG'
const QA = () => {
    return (
        <div className='p-5 lg:px-16'>
            <h3 className='text-center text-2xl'>Question & Answer</h3>
            <div className='p-2 rounded m-2'>
                <h2 className='text-2xl font-semibold'>Props vs State</h2>
                <p>1.State can not accessible to other components but props can accessible from child component</p>
                <p>2.State can be change but props can not change (read only)</p>
            </div>
            <div className='p-2  rounded m-2'>
                <h2 className='text-2xl font-semibold'>How does useState work..?</h2>
                    <img src={State} alt="" />
                <p>
                    
                </p>
            </div>
            <div className='p-2  rounded m-2'>
                <h2 className='text-2xl font-semibold'>Props vs State</h2>
                <p>1.State can not accessible to other components but props can accessible from child component</p>
                <p>2.State can be change but props can not change (read only)</p>
            </div>
        </div>
    );
}

export default QA;
