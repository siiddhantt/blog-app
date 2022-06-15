import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
    let location = useLocation();
    let navigate = useNavigate();
    const handleClick = (e) => {
        navigate("/addpost");
    };
    return (
        <header className="border-b border-gray-100 shadow">
            <div
                className="flex items-center justify-evenly h-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8"
            >
                <span className="basis-3/12">
                    <>{location.pathname == '/' ?
                        <a
                            href="/"
                            className="block p-6 border-b-4 border-transparent border-blue-500 flex items-center justify-center">
                            <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="16px" stroke="currentColor" stroke-width="1"><path d="M 23.951172 4 A 1.50015 1.50015 0 0 0 23.072266 4.3222656 L 8.859375 15.519531 C 7.0554772 16.941163 6 19.113506 6 21.410156 L 6 40.5 C 6 41.863594 7.1364058 43 8.5 43 L 18.5 43 C 19.863594 43 21 41.863594 21 40.5 L 21 30.5 C 21 30.204955 21.204955 30 21.5 30 L 26.5 30 C 26.795045 30 27 30.204955 27 30.5 L 27 40.5 C 27 41.863594 28.136406 43 29.5 43 L 39.5 43 C 40.863594 43 42 41.863594 42 40.5 L 42 21.410156 C 42 19.113506 40.944523 16.941163 39.140625 15.519531 L 24.927734 4.3222656 A 1.50015 1.50015 0 0 0 23.951172 4 z M 24 7.4101562 L 37.285156 17.876953 C 38.369258 18.731322 39 20.030807 39 21.410156 L 39 40 L 30 40 L 30 30.5 C 30 28.585045 28.414955 27 26.5 27 L 21.5 27 C 19.585045 27 18 28.585045 18 30.5 L 18 40 L 9 40 L 9 21.410156 C 9 20.030807 9.6307412 18.731322 10.714844 17.876953 L 24 7.4101562 z" /></svg>
                            <span className="sr-only">Home</span>
                        </a> :
                        <a
                            href="/"
                            className="block p-6 border-b-4 border-transparent hover:border-blue-500 flex items-center justify-center">
                            <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="16px" stroke="currentColor" stroke-width="1"><path d="M 23.951172 4 A 1.50015 1.50015 0 0 0 23.072266 4.3222656 L 8.859375 15.519531 C 7.0554772 16.941163 6 19.113506 6 21.410156 L 6 40.5 C 6 41.863594 7.1364058 43 8.5 43 L 18.5 43 C 19.863594 43 21 41.863594 21 40.5 L 21 30.5 C 21 30.204955 21.204955 30 21.5 30 L 26.5 30 C 26.795045 30 27 30.204955 27 30.5 L 27 40.5 C 27 41.863594 28.136406 43 29.5 43 L 39.5 43 C 40.863594 43 42 41.863594 42 40.5 L 42 21.410156 C 42 19.113506 40.944523 16.941163 39.140625 15.519531 L 24.927734 4.3222656 A 1.50015 1.50015 0 0 0 23.951172 4 z M 24 7.4101562 L 37.285156 17.876953 C 38.369258 18.731322 39 20.030807 39 21.410156 L 39 40 L 30 40 L 30 30.5 C 30 28.585045 28.414955 27 26.5 27 L 21.5 27 C 19.585045 27 18 28.585045 18 30.5 L 18 40 L 9 40 L 9 21.410156 C 9 20.030807 9.6307412 18.731322 10.714844 17.876953 L 24 7.4101562 z" /></svg>
                            <span className="sr-only">Home</span>
                        </a>}
                    </>
                </span>
                <span className="basis-3/12">
                    <>{location.pathname == "/categories" ?
                        <a
                            href="/categories"
                            className="block p-6 border-b-4 border-transparent border-blue-500 flex items-center justify-center">
                            <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16px" height="16px"><path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z" /></svg>
                            <span className="sr-only">Categories</span>
                        </a> :
                        <a
                            href="/categories"
                            className="block p-6 border-b-4 border-transparent hover:border-blue-500 flex items-center justify-center">
                            <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16px" height="16px"><path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z" /></svg>
                            <span className="sr-only">Categories</span>
                        </a>}
                    </>
                </span>
                <span className="basis-3/12">
                    <>{location.pathname == '/addpost' ?
                        <a
                            href="/addpost"
                            className="block p-6 border-b-4 border-transparent border-blue-500 flex items-center justify-center"
                        >
                            <img src="./addpost.png" style={{ height: 16, width: 16 }}></img>
                            <span className="sr-only"> AddPost </span>
                        </a> :
                        <a
                            href="/addpost"
                            className="block p-6 border-b-4 border-transparent hover:border-blue-500 flex items-center justify-center"
                        >
                            <img src="./addpost.png" style={{ height: 16, width: 16 }}></img>
                            <span className="sr-only"> AddPost </span>
                        </a>}
                    </>
                </span>
                <span className="basis-3/12">
                    <>{location.pathname == '/about' ?
                        <a
                            href="/about"
                            className="block p-6 border-b-4 border-transparent border-blue-500 flex items-center justify-center"
                        >
                            <svg
                                className="w-4 h-4"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                            </svg>

                            <span className="sr-only"> About </span>
                        </a> :
                        <a
                            href="/about"
                            className="block p-6 border-b-4 border-transparent hover:border-blue-500 flex items-center justify-center"
                        >
                            <svg
                                className="w-4 h-4"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                            </svg>

                            <span className="sr-only"> About </span>
                        </a>}
                    </>
                </span>
            </div>
        </header>
    )
};

export default Navbar;
