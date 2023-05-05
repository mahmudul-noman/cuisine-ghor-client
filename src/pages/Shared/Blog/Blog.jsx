import React from 'react';
import { FaDownload } from 'react-icons/fa';
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";


const ref = React.createRef();

const fullPage = {
    orientation: 'landscape',
    unit: 'in',
    format: [15, 18]
};

const Blog = () => {
    return (
        <>
            <div ref={ref} className='container mx-auto py-12'>
                <div className='flex gap-4 justify-center items-center mb-8'>
                    <h4 className='mb-4 text-center text-base lg:text-2xl font-extrabold font-alt'>All Question & Answer You Want To Know</h4>
                    <div>
                        <Pdf targetRef={ref} filename="Answer.pdf" options={fullPage} x={.9} y={.9} scale={1}>
                            {({ toPdf }) =>
                                <button onClick={toPdf} className='flex gap-2 btn btn-warning' title='Download'><FaDownload className='text-black text-xl cursor-pointer'></FaDownload></button>}
                        </Pdf>
                    </div>
                </div>
                <div className='grid lg:grid-cols-2 gap-4 px-4 lg:px-0'>
                    <div ref={ref} className="one shadow border-2 border-gray-300 p-8">
                        <h4 className='flex items-center gap-4 font-extrabold text-red-500 text-lg mb-4'>Tell us the differences between uncontrolled and controlled components.</h4>
                        <p className='text-base leading-8'>
                            <span className='font-bold text-lg'>Uncontrolled components:</span>
                            Inputs maintain their own internal state.
                            Accessed using DOM API.
                            Data flow is typically one-way.
                            Accessing form values is done using imperative DOM APIs.
                            Validation and error handling require manual implementation.
                            Provides more flexibility but less convenience.
                        </p>
                        <p className='text-base leading-8'>
                            <span className='font-bold text-lg'>Controlled components:</span>
                            Inputs rely on React to manage their state.
                            Accessed through component state.
                            Data flow is typically two-way.
                            Accessing form values is done through component state.
                            Validation and error handling can be easily implemented.
                            Provides convenience and easy integration with React ecosystem.
                        </p>
                    </div>


                    <div ref={ref} className="two shadow border-2 border-gray-300 p-8">
                        <h4 className='font-extrabold text-red-500 text-lg mb-4'>How to validate React props using PropTypes ?</h4>
                        <p className='text-base leading-8'>
                            <span className='font-bold text-lg'>To validate React props using PropTypes:</span>
                            Import the PropTypes library from 'prop-types'.
                            Define the propTypes as a static property of your component.
                            Specify the expected types for each prop using PropTypes validators like string, number, bool, etc.
                            Use .isRequired to mark a prop as required.
                            React will check the props against the defined propTypes and show warnings for incorrect or missing props in the console.
                        </p>
                    </div>

                    <div ref={ref} className="three shadow border-2 border-gray-300 p-8">
                        <h4 className='font-extrabold text-red-500 text-lg mb-4'>Tell us the difference between nodejs and express js.</h4>
                        <p className='text-base leading-8'>Node.js is a runtime environment that allows executing JavaScript code outside of a browser. It provides a platform for building server-side and networking applications using JavaScript. Node.js uses the V8 JavaScript engine and has an event-driven, non-blocking I/O model, which makes it highly efficient and scalable.
                            Express.js, on the other hand, is a web application framework built on top of Node.js. It simplifies the process of building web applications and APIs by providing a set of robust features and middleware. Express.js offers an intuitive and minimalist approach to handling HTTP requests, routing, middleware management, and rendering views.
                            In summary, Node.js is the underlying runtime environment that allows running JavaScript code on the server, while Express.js is a framework that leverages Node.js to provide an easier and more organized way to build web applications and APIs.
                        </p>
                    </div>

                    <div ref={ref} className="four shadow border-2 border-gray-300 p-8">
                        <h4 className='font-extrabold text-red-500 text-lg mb-4'>What is a custom hook, and why will you create a custom hook?</h4>
                        <p className='text-base leading-8'>
                            A custom hook in React is a JavaScript function that starts with the prefix "use" and allows you to reuse stateful logic across multiple components. It enables you to extract and encapsulate complex logic into a reusable hook that can be easily shared and composed within your application.
                            <br /> <br />
                            <span className='font-bold text-lg'> You would create a custom hook in React to:</span>

                            Extract repetitive or complex logic from components and reuse it across different parts of your application.
                            Promote code reusability, maintainability, and modularity.
                            Abstract away implementation details and provide a clean and simple API for using the logic.
                            Encapsulate stateful logic and manage state, side effects, or subscriptions in a consistent and reusable manner.
                            Improve the organization and readability of your codebase by separating concerns and reducing the complexity of individual components.
                            In summary, custom hooks in React allow you to create reusable, self-contained units of logic that can be shared and composed to simplify and enhance the development of your React components and applications.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;