import React from 'react'
import {PermMedia} from '@mui/icons-material'
export default function Share() {
  return (
    <div className='share'>
      <div className="shareWrapper">
        <div className="shareTop">
            {/* <img src="/src/assets/person/1.jpeg" alt="" className='shareProfileImg'/> */}
            <input placeholder='What`s on your mind' className='shareInput' />
        </div>
        <hr className='shareHr'/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <PermMedia className='shareOptionIcon'/>
                    <span className='shareOptionText'>Photo or video</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
