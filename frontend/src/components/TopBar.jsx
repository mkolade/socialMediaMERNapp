import React from 'react'
import {Search,Person,Chat,Notifications} from '@mui/icons-material'
import { Link } from 'react-router-dom'

export default function TopBar() {
  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <span className='logo'>Mksocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <Search className='searchIcon'/>
          <input placeholder='search for friends, posts or videos' className='searchInput' />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <Link to={'/'}><span className="topbarLink">Homepage</span></Link>
          <Link to={'/profile'}><span className="topbarLink">Profile</span></Link>
        </div>
        <div className="topbarIcons">
        
          <div className="topbarIconItem">
            <Person/>
            <span className="topbarIconBadge">
              1
            </span>
          </div>

          <div className="topbarIconItem">
            <Chat/>
            <span className="topbarIconBadge">
              2
            </span>
          </div>

          <div className="topbarIconItem">
            <Notifications/>
            <span className="topbarIconBadge">
              1
            </span>
          </div>

        </div>
        <img src="/src/assets/person/1.jpeg" alt="" className="topbarImg" />
      </div>
    </div>
  )
}

