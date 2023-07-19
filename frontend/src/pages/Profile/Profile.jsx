import React ,{useState,useEffect}from 'react'
import './Profile.css'
import TopBar from '../../components/TopBar'
import SideBar from '../../components/SideBar'
import Feed from '../../components/Feed'
import RightBar from '../../components/RightBar'
import noAvatar from '/assets/person/noAvatar.png'
import noCover from '/assets/person/noCover.png'
import axios from 'axios'
import { useParams } from 'react-router-dom'


export default function Profile() {
  const [user,setUser] = useState({})
  const username = useParams().username

  const PF_PERSON = import.meta.env.VITE_PF_PERSON
  const PF_POST = import.meta.env.VITE_PF_POST

  useEffect( () =>{
    const fetchUser = async () =>{
      const res = await axios.get(`http://localhost:8000/api/users/?username=${username}`);
      setUser(res.data)
    }
    fetchUser()
  },[username])

  return (
    <>
      <TopBar/>
      <div className="profile">
        <SideBar/>
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src={user.profilePicture ? PF_PERSON + user.profilePicture : noCover} alt="" />
              <img className="profileUserImg" src={user.coverPicture ? PF_POST + user.coverPicture : noAvatar} alt="" />
            </div>
            <div className="profileInfo">
              <h4 className="profileName">
                {user && user.username && user.username
                  .split(' ')
                  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(' ')
                }
              </h4>
              <span className="profileDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username}/>
            {user && <RightBar user = {user}/>}
          </div>
        </div>
      </div>
    </>
  )
}
