import React, { useState,useEffect } from 'react'
import {MoreVert} from '@mui/icons-material'
import { Users } from '../dummyData'
import axios from 'axios'
import noAvatar from '../assets/person/noAvatar.png'
import {format} from 'timeago.js'

export default function Post({post}) {

   //useful knowledge
  {/* ask chatgpt to explain this part indepth */}
  /* const postOwner = Users.filter((user) => user.id === post.userId)[0]
 */
  const [like,setLike] = useState(post.likes.length)
  const [isLiked,setIsLiked] = useState(false)
  const handleLike = () =>{
    setLike(isLiked ? like - 1 : like + 1)
    setIsLiked(!isLiked)
  }

  const [user,setUser] = useState({})
  useEffect( () =>{
    const fetchUser = async () =>{
      const res = await axios.get(`http://localhost:8000/api/users/${post.userId}`);
      setUser(res.data)
    }
    fetchUser()
  },[])

  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className='postProfileImg' src={user.profilePicture || noAvatar} alt="" />
            <span className="postUsername">
              {user && user.username && user.username
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')
              }
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert/>
          </div>
        </div>
        <div className="postMiddle">
          <span className="postText">{post.desc}</span>
          <img src={`/src/assets/post/${post.img}`} alt="" className="postMainImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className='postLikeIcon' src="/src/assets/like.png" onClick={handleLike} alt="" />
            <img className='postLikeIcon' src="/src/assets/heart.png" onClick={handleLike} alt="" />
            <span className="postLikeCounter">{like} people liked it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentCounter">{post.comment} Comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
