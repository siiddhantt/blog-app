import React from 'react';

function Categories() {
    return (
        <div className="flex flex-wrap">
            <div className="container justify-center px-5 py-24 mx-auto">
                <div className="border border-gray-200 p-6 rounded-lg">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-sky-100 text-indigo-500 mb-4">
                        <img src="./food.png" style={{ height: 24, width: 24 }}></img>
                    </div>
                    <h2 className="text-lg text-gray-900 font-bold title-font mb-2 underline underline-offset-2">Food</h2>
                    <p className="leading-relaxed text-base">Blogs/posts related to food items.</p>
                </div>
                <div className="border border-gray-200 p-6 rounded-lg">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-sky-100 text-indigo-500 mb-4">
                        <img src="./movies.png" style={{ height: 24, width: 24 }}></img>
                    </div>
                    <h2 className="text-lg text-gray-900 font-bold title-font mb-2 underline underline-offset-2">Movies</h2>
                    <p className="leading-relaxed text-base">Blogs/posts related to movies.</p>
                </div>
                <div className="border border-gray-200 p-6 rounded-lg">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-sky-100 text-indigo-500 mb-4">
                        <img src="./games.png" style={{ height: 24, width: 24 }}></img>
                    </div>
                    <h2 className="text-lg text-gray-900 font-bold title-font mb-2 underline underline-offset-2">Games</h2>
                    <p className="leading-relaxed text-base">Blogs/posts related to gaming titles.</p>
                </div>
                <div className="border border-gray-200 p-6 rounded-lg">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-sky-100 text-indigo-500 mb-4">
                        <img src="./books.png" style={{ height: 24, width: 24 }}></img>
                    </div>
                    <h2 className="text-lg text-gray-900 font-bold title-font mb-2 underline underline-offset-2">Books</h2>
                    <p className="leading-relaxed text-base">Blogs/posts related to books/novels.</p>
                </div>
            </div>
        </div>
    )
};

export default Categories;