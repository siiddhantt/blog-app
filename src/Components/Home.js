import React from 'react'
import Blogs from './Blogs'

function Home(props) {
    return (
        <div className='home'>
            {props.blogs.map((blogList) => { return <><Blogs key={blogList._id} blogs={blogList} /></> })}
        </div>
    )
}

export default Home
