import React from 'react'
import { CommentCreator, Comments } from '../components'

function CommentSection({postId , post}) {
  return (
    <div className='bg-slate-200'>
        <CommentCreator postId = {postId}  />
        <Comments post = {post} />
    </div>
  )
}

export default CommentSection