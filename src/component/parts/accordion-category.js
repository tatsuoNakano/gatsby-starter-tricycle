import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

export default function AccordionCategory() {
    const [openAcc1, setOpenAcc1] = React.useState(true);
    const [openAcc2, setOpenAcc2] = React.useState(true);
    const [openAcc3, setOpenAcc3] = React.useState(true);

    const handleOpenAcc1 = () => setOpenAcc1((cur) => !cur);
    const handleOpenAcc2 = () => setOpenAcc2((cur) => !cur);
    const handleOpenAcc3 = () => setOpenAcc3((cur) => !cur);

    return (
        <>
            <Accordion open={openAcc1}>
                <AccordionHeader className="bg-gray-300 pl-2.5" onClick={handleOpenAcc1}>Javascript</AccordionHeader>
                <AccordionBody className="padding">
                    JavaScript, created by Brendan Eich of Netscape in 1995, is primarily used for creating interactive web pages and web applications. It is utilized on both client and server sides, enabling dynamic web page creation, DOM manipulation, asynchronous programming, functional programming, and the utilization of various libraries and frameworks such as jQuery, React, Angular, and Vue.js. Node.js serves as a JavaScript runtime environment, facilitating server-side execution of JavaScript. JavaScript plays a crucial role in modern web development and continues to gain popularity.
                </AccordionBody>
            </Accordion>
            <Accordion open={openAcc2}>
                <AccordionHeader className="bg-gray-300 pl-2.5" onClick={handleOpenAcc2}>React</AccordionHeader>
                <AccordionBody className="padding">

                    React is a JavaScript library created by Facebook in 2013 for building user interfaces, especially for single-page applications. It employs a component-based architecture, where UIs are broken into reusable components. Key features include the virtual DOM, JSX syntax for combining HTML and JavaScript, unidirectional data flow, built-in state management, and React Hooks for functional components. React has a vibrant ecosystem and is widely used for its efficiency in creating interactive and scalable UIs.
                </AccordionBody>
            </Accordion>
            <Accordion open={openAcc3}>
                <AccordionHeader className="bg-gray-300 pl-2.5" onClick={handleOpenAcc3}>
                    GatsbyJS
                </AccordionHeader>
                <AccordionBody className="padding">
                    GatsbyJS is a modern website framework built on React. It generates static websites with fast loading times and optimized performance. Key features include its use of React, GraphQL for data management, a plugin system for extensibility, and emphasis on performance optimization. Gatsby offers a great developer experience with hot reloading and comprehensive documentation, making it a popular choice for building modern web applications.
                </AccordionBody>
            </Accordion>
        </>
    );
}



