import React from 'react'
import Share from './Share'
import { Posts } from '../dummyData'
import Post from './Post'

export default function Feed() {
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>
        {Posts.map((post) =>(
          <Post post = {post} key={post.id}/>
        ))}
        
      </div>
    </div>
  )
}
