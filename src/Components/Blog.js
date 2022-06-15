import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const Blog = (props) => {
  const { state } = useLocation();
  const { ID } = state;
  let data = props.blogs;
  let filteredData = data.filter(function (data) {
    return data.id === ID;
  }).map(function (data) {
    return data;
  })
  useEffect(() => {
    console.log(filteredData);
  }, []);
  return (
    <div>
      <div className='blog'>
        <h2>{filteredData[0].title}</h2>
        <p style={{ fontSize: '1rem', textAlign: 'center', marginBottom: '4px' }}>{filteredData[0].categories}</p>
        <hr />
        <p className="content">
          <p>{filteredData[0].content}</p>
        </p>
      </div>
    </div>
  )
}

export default Blog