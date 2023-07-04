import React from 'react'
import './Profile.css'
import TopBar from '../../components/TopBar'
import SideBar from '../../components/SideBar'
import Feed from '../../components/Feed'
import RightBar from '../../components/RightBar'
import post3 from '../../assets/post/post3.jpeg'
import person1 from '../../assets/person/person1.jpeg'

export default function Profile() {
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
              <h4 className="profileName">Linda Norton</h4>
              <span className="profileDesc">Lorem ipsum dolor </span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed/>
            <RightBar profile/>
          </div>
        </div>
      </div>
    </>
  )
}
