import React ,{useState,useEffect}from 'react'
import './Profile.css'
import TopBar from '../../components/TopBar'
import SideBar from '../../components/SideBar'
import Feed from '../../components/Feed'
import RightBar from '../../components/RightBar'
import post3 from '../../assets/post/post3.jpeg'
import person1 from '../../assets/person/person1.jpeg'
import axios from 'axios'

export default function Profile() {
  const [user,setUser] = useState({})

  useEffect( () =>{
    const fetchUser = async () =>{
      const res = await axios.get(`http://localhost:8000/api/users/?username=john`);
      setUser(res.data)
    }
    fetchUser()
  },[])

  return (
    <>
      <TopBar/>
      <div className="profile">
        <SideBar/>
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src={post3} alt="" />
              <img className="profileUserImg" src={person1} alt="" />
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
            <Feed username={'john'}/>
            <RightBar user = {user}/>
          </div>
        </div>
      </div>
    </>
  )
}
