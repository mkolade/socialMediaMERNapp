import React from 'react'
import "./HomePage.css"
import TopBar from '../../components/TopBar'
import SideBar from '../../components/SideBar'
import Feed from '../../components/Feed'
import RightBar from '../../components/RightBar'

export default function HomePage() {
  return (
    <>
      <TopBar/>
      <div className="homeContainer">
        <SideBar/>
        <Feed/>
        <RightBar/>
      </div>
    </>
  )
}
