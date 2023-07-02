import React, { useEffect, useState } from 'react'
import Share from './Share'
import Post from './Post'
import axios from 'axios'

export default function Feed() {
  const [posts,setPosts] = useState([])

  useEffect( () =>{
    const fetchData = async () =>{
      const res = await axios.get("post/timeline/all/648f413f9ea807a0c753e5ac")
      console.log(res)
    }
    fetchData()
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
