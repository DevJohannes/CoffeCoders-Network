import SendButton from './SendButton'
import React, { useState } from 'react';
 
const Section = () => {
  // useState-Hooks for the Inputs
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');

// function for sending the post-request
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Collect the data from the input fields
    const postData = {
      title: title,
      description: description,
      tags: tags.split(',').map(tag => tag.trim())
    };

    // Sending Post Request
    try {
      const response = await fetch('http://localhost:3001/api/createPost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData)
    });
    
    if (response.ok) {
      console.log('Post sucessfully created!')
    } else {
      console.log('Error while creating new Post.')
    }
  } catch (error) {
    console.error('Error: ', error)
  }
}

  return (
        <div className="flex flex-col bg-base-100 items-center text-justify w-7/12 h-96 rounded-xl border-gray-700 border px-6">

          <form onSubmit={handleSubmit}>
          {/* Inputfields for Title & Content*/}
          <input type="text" placeholder="Enter Post Title" className="my-5 input input-bordered input-md w-full" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)}/>
          <textarea placeholder="Type Content here" className="textarea textarea-bordered textarea-md w-full resize-none h-3/4 mb-12" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)}/>

          {/* Choices of Tags & Button to send*/}
          <SendButton className='place-items-end'></SendButton>
          </form>
        </div>
  )
}

export default Section

/* TODO:
- Setting value at input fields
- onChange at input fields
- creating a database for the posts
- backend for post requests, that is adding the new post to the database
*/