import React from 'react'
import {PermMedia,Label,Room,EmojiEmotions} from '@mui/icons-material'
import person1 from '../assets/person/person1.jpeg'
export default function Share() {
  return (
    <div className='share'>
      <div className="shareWrapper">
        <div className="shareTop">
            <img src={person1} alt="" className='shareProfileImg'/>
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
