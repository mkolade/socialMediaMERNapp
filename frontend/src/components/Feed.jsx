import React, { useEffect, useState } from 'react'
import Share from './Share'
import Post from './Post'

export default function Feed() {
  const [posts,setPosts] = useState([])
  useEffect(() =>{
    console.log('fed rendered')
  },[])
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>
        {/* {Posts.map((post) =>(
          <Post post = {post} key={post.id}/>
        ))} */}
        
      </div>
    </div>
  )
}
