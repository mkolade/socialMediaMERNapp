import React, { useContext, useState } from 'react'
import {Search,Person,Chat,Notifications} from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import noAvatar from '/assets/person/noAvatar.png'

export default function TopBar() {

  const {user,dispatch} = useContext(AuthContext)
  const [searchQuery,setSearchQuery] = useState('')
  const PF_PERSON = import.meta.env.VITE_PF_PERSON
  const navigate =useNavigate()

  const handleLogout = () =>{
    dispatch({type:"LOG_OUT"})
    localStorage.removeItem("socialMediaUser")
    navigate('/')
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim() !== '') {
      console.log(searchQuery)
    }
  };

  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <Link to={'/'} style={{textDecoration: 'none'}}>
          <span className='logo'>Mksocial</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <Search onClick={handleSearchSubmit} className='searchIcon'/>
          <input 
            placeholder='search for friends through their unique username' 
            className='searchInput' 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} 
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <Link to={'/'}><span className="topbarLink">Homepage</span></Link>
          <span className="topbarLink" onClick={handleLogout}>LOG OUT</span>
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

