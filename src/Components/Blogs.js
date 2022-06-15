import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

function Blogs(props) {
    let navigate = useNavigate();
    const handleClick = (e) => {
        navigate('/blogs', { state: { ID: props.blogs.id } });
    };
    return (
        <div>
            <section className="text-gray-700 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap justify-center sm:-m-4 -mx-4 -mb-10 -mt-4">
                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6 border rounded-lg shadow-lg">
                            <h2 className="text-xs font-light text-gray-500 uppercase">{props.blogs.categories}</h2>
                            <button onClick={handleClick}>
                                <h2 className="text-3xl font-bold title-font text-gray-900 mt-4 hover:underline">{props.blogs.title}</h2>
                            </button>
                            <p className="text-base leading-relaxed mt-2">{props.blogs.desc}</p>
                            <div className="rounded-lg h-64 overflow-hidden mt-2">
                                <img alt="content" className="object-cover object-center h-full w-full" src={props.blogs.imagelink} />
                            </div>
                            <div className="flex flex-row justify-between border rounded-lg shadow mt-2">
                                <Button variant="text" style={{ fontFamily: "sans-serif", textTransform: "none", width: "100%" }}>
                                    <img src="./like.png" style={{ height: 16, width: 16, marginInline: 5, marginBottom: 4 }}></img>
                                    <h1>
                                        Like
                                    </h1>
                                </Button>
                                <Button variant="text" style={{ fontFamily: "sans-serif", textTransform: "none", width: "100%" }}>
                                    <img src="./comment.png" style={{ height: 16, width: 16, marginInline: 5, marginBottom: 1 }}></img>
                                    <h1>
                                        Comment
                                    </h1>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blogs;
