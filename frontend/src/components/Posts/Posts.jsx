import React from 'react'
import { useContext } from 'react'
import {DataContext} from '../../pages/Home'
import Post from './Post/Post'

function Posts() {
    const {posts} = useContext(DataContext)

  return (
    <div>
        {posts && posts?.map((post) => (
            <div>
              <Post key={post._id} post = {post}/>
            </div>
        ))}
    </div>
  )
}

export default Posts