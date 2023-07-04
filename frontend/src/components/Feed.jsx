import React, { useEffect, useState } from 'react'
import Share from './Share'
import Post from './Post'
import axios from 'axios'

export default function Feed({username}) {
  const [posts,setPosts] = useState([])

  useEffect( () =>{
    const fetchPosts = async () =>{
      const res = username 
      ? await axios.get("http://localhost:8000/api/post/profile/" + username) 
      : await axios.get("http://localhost:8000/api/post/timeline/all/648f413f9ea807a0c753e5ac");
      setPosts(res.data)
    }
    fetchPosts()
  },[username])

  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>
        {posts.map((post) =>(
          <Post post = {post} key={post._id}/>
        ))}
        
      </div>
    </div>
  )
}
