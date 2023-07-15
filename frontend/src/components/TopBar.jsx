import React, { useContext } from 'react'
import {Search,Person,Chat,Notifications} from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import noAvatar from '../assets/person/noAvatar.png'

export default function TopBar() {

  const {user} = useContext(AuthContext)
  const PF_PERSON = import.meta.env.VITE_PF_PERSON

  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <Link to={'/'} style={{textDecoration: 'none'}}>
          <span className='logo'>Mksocial</span>
        </Link>
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
          <span className="topbarLink">Timeline</span>
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
        <Link to={`/profile/${user.username}`}>
          <img src={user.profilePicture ?PF_PERSON + user.profilePicture : noAvatar} alt="" className="topbarImg" />
        </Link>
      </div>
    </div>
  )
}

