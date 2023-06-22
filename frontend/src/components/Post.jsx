import React from 'react'
import {MoreVert} from '@mui/icons-material'

export default function Post() {
  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className='postProfileImg' src="/src/assets/person/4.jpeg" alt="" />
            <span className="postUsername">Chelsea Scott</span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert/>
          </div>
        </div>
        <div className="postMiddle">
          <span className="postText">Hey this is my first Post :)</span>
          <img src="/src/assets/post/1.jpeg" alt="" className="postMainImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className='postLikeIcon' src="/src/assets/like.png" alt="" />
            <img className='postLikeIcon' src="/src/assets/heart.png" alt="" />
            <span className="postLikeCounter">32 people liked it</span>
          </div>
          <div className="postBottomRight">
            <spam className="postCommentCounter">9 Comments</spam>
          </div>
        </div>
      </div>
    </div>
  )
}
