import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center'>
        <AccountCircleIcon/>
        <span className='font-bold p-2'>{name}</span>
        <p>: {message}</p>
    </div>
  )
}

export default ChatMessage