import React from 'react';
import { Button } from '@mui/material';

export default function About() {
    return (
        <div>
            <section className="text-gray-700 body-font">
                <div className="container px-5 py-36 mx-auto">
                    <div className="flex flex-wrap justify-center sm:-m-4 -mx-4 -mb-10 -mt-4">
                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6 border rounded-lg shadow-lg">
                            <h2 className="text-xs font-light text-gray-500 uppercase"></h2>
                            <h2 className="text-center text-3xl font-bold title-font text-gray-900 mt-4 hover:underline underline underline-offset-4">BlogApp</h2>
                            <p className="text-center text-base leading-relaxed mt-2">Created by Siddhant.</p>
                            <p className="text-center text-base leading-relaxed">You can find me on GitHub and checkout my other projects too :D</p>
                            <div className="flex justify-center rounded-lg h-64 overflow-hidden mt-2">
                                <img alt="content" className="object-cover object-center h-fit w-fit" src="./about.jpg" />
                            </div>
                            <div className="flex flex-row justify-around border rounded-lg shadow mt-2 bg-blue-600">
                                <Button href="https://github.com/siiddhantt" variant="text" style={{ fontFamily: "sans-serif", textTransform: "none", width: "100%" }}>
                                    <h1 className="text-white font-bold">
                                        GitHub
                                    </h1>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};
