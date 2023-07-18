import React, { useContext, useRef, useState } from 'react'
import {PermMedia,Label,Room,EmojiEmotions} from '@mui/icons-material'
import noAvatar from '/assets/person/noAvatar.png'
import { AuthContext } from '../context/AuthContext'
import axios from 'axios'

export default function Share() {

  const PF_PERSON = import.meta.env.VITE_PF_PERSON

  const {user} = useContext(AuthContext)
  const desc = useRef()
  const [file,setFile] = useState('')
  

  const handleSubmit = async (e) =>{
    e.preventDefault()
    const newPost ={
      userId:user._id,
      desc:desc.current.value
    }
    if(file){
      console.log("File: ",file)
      const data = new FormData()
      const random = Math.floor(Math.random() * 10000);
      const fileName = `${random}-${file.name}`;
      data.append("file",file)
      data.append("name",fileName)
      newPost.img = fileName

      /* // Iterate over the FormData entries to log the appended values
      for (let pair of data.entries()) {
        console.log(pair[0], pair[1]);
      } */
      
      try{
        await axios.post(`http://localhost:8000/api/upload/?filename=${encodeURIComponent(fileName)}`,data)
      }catch(err){
        console.log(err)
      }
    }

    try{
      const res = await axios.post('http://localhost:8000/api/post/',newPost)
      console.log('post uploaded successfully')
      window.location.reload()
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className='share'>
      <div className="shareWrapper">
        <div className="shareTop">
            <img src={ user.profilePicture ? PF_PERSON + user.profilePicture : noAvatar}  alt="" className='shareProfileImg'/>
            <input 
              placeholder={'What`s on your mind ' + user.username} 
              className='shareInput' 
              ref={desc}
            />
        </div>
        <hr className='shareHr'/>
        <form className="shareBottom" onSubmit={handleSubmit}>
            <div className="shareOptions">
                <label htmlFor='file' className="shareOption">
                    <PermMedia htmlColor='tomato' className='shareOptionIcon'/>
                    <span className='shareOptionText'>Photo or video</span>
                    <input type="file" style={{display:"none"}} name="file" accept='.png,.jpeg,.jpg' id="file" onChange={(e) =>setFile(e.target.files[0])} />
                </label>
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
            <button className="shareButton" type='submit'>Share</button>
        </form>
      </div>
    </div>
  )
}
