import React from 'react'
import { CommentCreator } from '../components'

function CommentSection({postId}) {
  return (
    <div>
        <CommentCreator postId = {postId}/>
    </div>
  )
}

export default CommentSection