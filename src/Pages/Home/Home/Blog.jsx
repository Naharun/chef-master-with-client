import React from 'react';

const Blog = () => {
    return (

        <div>
            <div className='rounded-4 mx-auto  p-4 text-center fw-bold my-4'>
                <h1 className=" fs-1 fw-bolder">Welcome My Dear Developer!!</h1>
                <hr className='w-75 mx-auto' />
            </div>
            <div className=' container'>
                <div className="rounded-4 bg-black text-white p-4 mt-4 my-2">
                    <h4 className="p-2">Question-1: Tell us the differences between uncontrolled and controlled components ?</h4>
                    <ul><b>Difference Between Controlled and Uncontrolled Components</b> <br /><li>The ControlledInput component receives its current value and an onChange callback via props.</li> <li> The UncontrolledInput component maintains its own internal state, and when the user types into the input, it calls the setValue function and updates the state, which in turn updates the input value.</li> </ul>
                </div>
                <div className="rounded-4 bg-black text-white p-4">
                    <h4 className="text-white pt-3 my-2">Question-2:How to validate React props using PropTypes ?</h4>
                    <li><b>React Props Validation</b> We can use React props, short for properties, to send data from one component to another. When developing a React application, you will need to structure and define your props to avoid bugs and errors. PropTypes is React's internal mechanism for adding type checking to component props. React components use a special property called propTypes to set up type checking.</li>
                </div>
                <div className="rounded-4 bg-black text-white p-4 mt-4 my-2">
                    <h4 className="p-2">Question-1: Tell us the Difference Between Node Js vs Express Js?</h4>
                    <ul><b>Difference Between Node Js vs Express Js:</b> <br /><li>NodeJS is open-source, cross-platform JavaScript code that runs on servers. It uses an asynchronous event-driven model and is designed to build scalable network applications. It's built on Google Chrome's V8 engine, which makes it fast and efficient to develop apps.</li> <li> ExpressJS is a web application framework for NodeJS. That's what mainly makes the difference between Express JS and Node JS. The former provides various features that make web application development fast and easy, which otherwise takes more time using only the latter. It provides a robust set of features for web and mobile applications.</li> </ul>
                </div>
                <div className="rounded-4 bg-black text-white p-4 mb-4">
                    <h4 className="text-white pt-3 my-2">Question-2: What is Custom Hook ?</h4>
                    <li><b>Custom Hook:</b> It can be reused easily, which makes the code cleaner and reduces the time to write the code.</li> <br /> <li>Custom React JS hooks can help developers save time, are reliable, reusable, and make the code clean. Creating custom React JS hooks is relatively easy, and you can search for many open sources where you can get some custom hooks from the library already created by developers.</li>
                </div>
            </div>
        </div>

    );
};

export default Blog;