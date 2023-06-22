import React from 'react'
import {RssFeed,PlayCircleFilledOutlined,Group,Bookmark,HelpOutline,Chat,WorkOutline,Event,School} from '@mui/icons-material'
import { Users } from '../dummyData'
export default function SideBar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListitem">
            <RssFeed className='listIcon'/>
            <span className="listText">Feed</span>
          </li>
          <li className="sidebarListitem">
            <Chat className='listIcon'/>
            <span className="listText">Chats</span>
          </li>
          <li className="sidebarListitem">
            <PlayCircleFilledOutlined className='listIcon'/>
            <span className="listText">Videos</span>
          </li>
          <li className="sidebarListitem">
            <Group className='listIcon'/>
            <span className="listText">Groups</span>
          </li>
          <li className="sidebarListitem">
            <Bookmark className='listIcon'/>
            <span className="listText">Bookmarks</span>
          </li>
          <li className="sidebarListitem">
            <HelpOutline className='listIcon'/>
            <span className="listText">Questions</span>
          </li>
          <li className="sidebarListitem">
            <WorkOutline className='listIcon'/>
            <span className="listText">Jobs</span>
          </li>
          <li className="sidebarListitem">
            <Event className='listIcon'/>
            <span className="listText">Events</span>
          </li>
          <li className="sidebarListitem">
            <School className='listIcon'/>
            <span className="listText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show more</button>
        <hr className="sidebareHr" />
        <ul className="sidebarFriendsList">
          {Users.map((user) =>(
            <li className="sidebarFriends">
              <img src={user.profilePicture} alt="" className="sidebarFriendsImg" />
              <span className="sidebarFriendsName">{user.username}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
