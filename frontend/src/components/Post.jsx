import React, { useState } from 'react'
import {MoreVert} from '@mui/icons-material'
import { Users } from '../dummyData'

export default function Post({post}) {
  {/* ask chatgpt to explain this part indepth */}
  const postOwner = Users.filter((user) => user.id === post.userId)[0]

  const [like,setLike] = useState(post.like)
  const [isLiked,setIsLiked] = useState(false)
  const handleLike = () =>{
    setLike(isLiked ? like - 1 : like + 1)
    setIsLiked(!isLiked)
  }

  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            {/* <img className='postProfileImg' src={postOwner.profilePicture} alt="" /> */}
            {/* <span className="postUsername">
              {postOwner.username}
            </span> */}
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert/>
          </div>
        </div>
        <div className="postMiddle">
          <span className="postText">{post.desc}</span>
          <img src={post.photo} alt="" className="postMainImg" />
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
