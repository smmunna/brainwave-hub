import React from 'react';
import './QA.css';
const QA = () => {
    return (
        <div className='p-5 lg:px-16  ques-ans'>
            <h3 className='text-center text-2xl'>Question & Answer</h3>
            <div className='p-2 rounded m-2'>
                <h2 className='text-2xl font-semibold'>Props vs State</h2>
                <p>1.State can not accessible to other components but props can accessible from child component</p>
                <p>2.State can be change but props can not change (read only)</p>
            </div>
            <div className='p-2  rounded m-2'>
                <h2 className='text-2xl font-semibold'>How does useState work..?</h2>
                <img className='rounded mt-2 w-96' src="https://raw.githubusercontent.com/smmunna/images/main/state.PNG" alt="" />
                <p className='mt-3'>
                    In this example, the useState hook is used to create a state variable count and a callback function setCount that can be used to update the state. The initial value of the count variable is 0. When the button is clicked, which calls setCount with the new value of count. This causes React to re-render the component with the new state value.
                </p>
            </div>
            <div className='p-2  rounded m-2'>
                <h2 className='text-2xl font-semibold'>Purpose of useEffect()</h2>
                <p>It allows us to execute some code after rendering our component, such as updating the DOM, fetching data from an API.</p>
            </div>
            <div className='p-2  rounded m-2'>
                <h2 className='text-2xl font-semibold'>How does react works ?</h2>
                <p>React simplifies the process of building user interfaces by breaking down the UI into small, reusable components. React uses a virtual DOM to efficiently update the UI by only re-rendering components that have changed, resulting in a fast and responsive user experience.</p>
            </div>
        </div>
    );
}

export default QA;
