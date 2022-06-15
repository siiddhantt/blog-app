import React, { useState } from 'react'

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  async function addBlog() {
    const response = await fetch('http://localhost:5000/api/blog/add', {
      method: 'POST',
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
      },
      body: JSON.stringify({ title: `${title}`, likes: 0, categories: `${category}`, content: `${content}` })
    });
    const json = await response.json();
  }
  const submit = (e) => {
    e.preventDefault();
    if (!title || !category || !content) {
      alert("One or more fields are empty!");
    }
    else {
      addBlog();
    }
  }
  return (
    <div className='addpost'>
      <h1 style={{ textAlign: 'center' }}>Add a new post</h1>
      <form>
        <input type="text" className='form-control' placeholder='Add title' onChange={(e) => setTitle(e.target.value)} />
        <input type="text" className='form-control' placeholder='Add category' onChange={(e) => setCategory(e.target.value)} />
        <textarea name="content" id="content" cols="30" rows="10" className='form-control' placeholder='Blog Content' onChange={(e) => setContent(e.target.value)}>
        </textarea>
        <button className='btn' style={{ fontSize: '1.5rem' }} onClick={submit} onSubmit={submit}>Submit</button>
      </form>
    </div>
  )
}

export default AddPost