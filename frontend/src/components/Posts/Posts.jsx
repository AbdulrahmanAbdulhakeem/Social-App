import React from 'react'
import { useContext } from 'react'
import {DataContext} from '../../pages/Home'
import Post from './Post/Post'

function Posts() {
    const {posts} = useContext(DataContext)
    // const {post} = posts
    console.log(posts)

  return (
    <div>
        {posts && posts.map((posts) => (
            <div key={posts._id}>
              <Post posts = {posts}/>
            </div>
        ))}
    </div>
  )
}

export default Posts