import React from 'react'

const Posts = ({ username, description, profile_picture, date, title }) => {
  return (
    <div className='flex rounded-md border-gray-700 border w-5/12 pt-5 mt-6'>
      <div className=''>
        {/* Userinformation */}
        <div className='flex p-3'>
          {/* eslint-disable-next-line */}
          <img className='rounded-3xl w-11 h-11 ' src={profile_picture} alt={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'}></img>
          <a href={'/users/' + username}><h1 className='text-info pt-2 pl-3'>{username}</h1></a>
          <h1 className='pt-2 pl-5 ' >{date}</h1>
        </div>

        <div className='flex pl-3'>
          <h1 className='text-xl'>{title}</h1>
        </div>
        <div className='flex mt-1 pl-3 pb-4 pr-3 object-left'>
          <p className='text-white'>{description}</p>
        </div>

      </div>  
    </div>
  )
}

export default Posts