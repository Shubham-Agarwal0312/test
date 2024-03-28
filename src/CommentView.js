import React from 'react'
const imageURL = "https://t1.gstatic.com/images?q=tbn:ANd9GcThsotATP9ktYH_-oqNK6lYSI2USCxC-9nhbqScnKqvWFyxmL64";

const CommentView = ({commentObj}) => {
  return (
    <>
        <div className='border rounded-lg border-black'>
            <div className='flex ml-2'>
                <img className='w-8 h-8 border rounded-full' src={imageURL}/>
                <span className='ml-2 mt-1 font-bold'>{commentObj.author}</span>
            </div>
            <div className='ml-8 mt-2'>{commentObj.comment}</div>
        </div>
        {commentObj.reply && commentObj.reply.map((commentObj, index) => {
        return <div className='ml-12'><CommentView commentObj={commentObj} /></div>;
      })}
    </>
    
  )
}

export default CommentView
