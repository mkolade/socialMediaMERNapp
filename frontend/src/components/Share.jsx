import React, { useContext } from 'react'
import {PermMedia,Label,Room,EmojiEmotions} from '@mui/icons-material'
import noAvatar from '../assets/person/noAvatar.png'
import { AuthContext } from '../context/AuthContext'

export default function Share() {

  const {user} = useContext(AuthContext)

  return (
    <div className='share'>
      <div className="shareWrapper">
        <div className="shareTop">
            <img src={user.profilePicture ? user.profilePicture : noAvatar} alt="" className='shareProfileImg'/>
            <input placeholder='What`s on your mind' className='shareInput' />
        </div>
        <hr className='shareHr'/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <PermMedia htmlColor='tomato' className='shareOptionIcon'/>
                    <span className='shareOptionText'>Photo or video</span>
                </div>
                <div className="shareOption">
                    <Label htmlColor='blue' className='shareOptionIcon'/>
                    <span className='shareOptionText'>Tag</span>
                </div>
                <div className="shareOption">
                    <Room htmlColor='green' className='shareOptionIcon'/>
                    <span className='shareOptionText'>Location</span>
                </div>
                <div className="shareOption">
                    <EmojiEmotions htmlColor='goldenrod' className='shareOptionIcon'/>
                    <span className='shareOptionText'>Feeling</span>
                </div>
            </div>
            <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  )
}
