import React from 'react'
import './Profile.css'
import TopBar from '../../components/TopBar'
import SideBar from '../../components/SideBar'
import Feed from '../../components/Feed'
import RightBar from '../../components/RightBar'

export default function Profile() {
  return (
    <>
      <TopBar/>
      <div className="profile">
        <SideBar/>
        <div className="profileRight">
          <div className="profileRightTop">
            kjhfj
          </div>
          <div className="profileRightBottom">
            <Feed/>
            <RightBar/>
          </div>
        </div>
      </div>
    </>
  )
}
