import React, { useContext, useEffect, useState } from 'react'
import Share from './Share'
import Post from './Post'
import axios from 'axios'
import { AuthContext } from '../context/AuthContext'

export default function Feed({username}) {
  const [posts,setPosts] = useState([])
  const {user} = useContext(AuthContext)

  useEffect( () =>{
    const fetchPosts = async () =>{
      const res = username 
      ? await axios.get("http://localhost:8000/api/post/profile/" + username) 
      : await axios.get("http://localhost:8000/api/post/timeline/all/" + user._id);
      setPosts(res.data)
    }
    fetchPosts()
  },[username,user._id])

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
