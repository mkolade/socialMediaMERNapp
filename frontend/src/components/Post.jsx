import React, { useState,useEffect, useContext } from 'react'
import {MoreVert} from '@mui/icons-material'
import axios from 'axios'
import noAvatar from '/assets/person/noAvatar.png'
import {format} from 'timeago.js'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export default function Post({post}) {

   //useful knowledge
  {/* ask chatgpt to explain this part indepth */}
  /* const postOwner = Users.filter((user) => user.id === post.userId)[0]
 */

  const PF_PERSON = import.meta.env.VITE_PF_PERSON
  const PF_POST = import.meta.env.VITE_PF_POST

  const [user,setUser] = useState({})
  const {user:currentUser} = useContext(AuthContext)
  const [like,setLike] = useState(post.likes.length)
  const [isLiked,setIsLiked] = useState(false)

  useEffect( () =>{
    const fetchUser = async () =>{
      const res = await axios.get(`http://localhost:8000/api/users/?userId=${post.userId}`);
      setUser(res.data)
    }
    fetchUser()
  },[post.userId])

  useEffect(() =>{
    setIsLiked(post.likes.includes(currentUser._id))
  },[currentUser._id])

 
  const handleLike = async () =>{
    try{
      const res = await axios.put(`http://localhost:8000/api/post/` + post._id + '/like' ,{userId:currentUser._id})
      console.log(res.data)
    }catch(err){
      console.log(err)
    }
    setLike(isLiked ? like - 1 : like + 1)
    setIsLiked(!isLiked)
  }

  

  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user.username}`}>
              <img className='postProfileImg' src={user.profilePicture ? PF_PERSON + user.profilePicture : noAvatar} alt="" />
            </Link>
            <span className="postUsername">
              {user && user.username && user.username
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')
              }
            </span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert/>
          </div>
        </div>
        <div className="postMiddle">
          <span className="postText">{post.desc}</span>
          <img src={PF_POST + post.img} alt="" className="postMainImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className='postLikeIcon' src="/assets/like.png" onClick={handleLike} alt="" />
            <img className='postLikeIcon' src="/assets/heart.png" onClick={handleLike} alt="" />
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
