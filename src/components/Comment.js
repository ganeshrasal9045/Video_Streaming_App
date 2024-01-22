import React from 'react'

const Comment = ({data}) => {
    const {name, text} = data;
  return (
    <div className='flex p-2 my-2 shadow-sm bg-gray-200 rounded-lg'>
      <img className='h-8' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' alt='userImg' />
      <div className='px-3'>
        <p className='font-bold'>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Comment
