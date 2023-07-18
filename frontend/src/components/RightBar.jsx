import React, { useEffect, useState } from 'react'
import { Users } from '../dummyData'
import axios from 'axios'
import noAvatar from '/assets/person/noAvatar.png'
import {Link} from 'react-router-dom'

export default function RightBar({user}) {
  const PF_PERSON = import.meta.env.VITE_PF_PERSON

  const [friends,setFriends] = useState([])

  useEffect(() =>{
    const getFriends = async() =>{
      try{
        const res = await axios.get('http://localhost:8000/api/users/followings/' + user._id)
        setFriends(res.data)
      }catch(err){
        console.log(err)
      }
    }
    getFriends()
  },[user._id])
  
  const HomeRightbar = () =>{
    return (
      <>
        <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Chelsea Scott</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img src="/assets/ad.png" alt="" className="rightbarAds" />
        <h4 className="rightbarTitle">Online friends</h4>
        <ul className="onlineFriendsList">
          {Users.map(user =>(
            <li className="onlineFriend" key={user.id}>
            <div className="profileImgContainer">
              <img src={user.profilePicture} alt="" className="profileImg" />
              <span className="profileOnlineIcon"></span>
            </div>
            <span className="profileUsername">{user.username}</span>
          </li>
          ))}
          
        </ul>
      </>
    )
  }
  const ProfileRightbar = () =>{
    
    return(
      <>
        <h4 className='profileRightbarTitle'>User information</h4>
        <div className="profileRightbarInfo">
          <div className="profileRightbarInfoItem">
            <span className="profileRightbarInfoKey">City :</span>
            <span className="profileRightbarInfoValue">
              {user && user.city && user.city
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')
              }
            </span>
          </div>
          <div className="profileRightbarInfoItem">
            <span className="profileRightbarInfoKey">From :</span>
            <span className="profileRightbarInfoValue">
              {user && user.from && user.from
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')
              }
            </span>
          </div>
          <div className="profileRightbarInfoItem">
            <span className="profileRightbarInfoKey">Relationship Status :</span>
            <span className="profileRightbarInfoValue">{user.relationship === 1 ? "Single"  : ( user.relationship === 2 ? "Married" : "Complicated") }</span>
          </div>
        </div>

        <h4 className='profileRightbarTitle'>Following</h4>
        <div className="profileFollowings">
              {friends.map(friend =>(
                <Link to={'/profile/' + friend.username} style={{textDecoration:"none"}}>
                  <div className="profileFollower" key={friend.userId}>
                    <img className='followerImg' src={ friend.profilePicture ? PF_PERSON +  friend.profilePicture :noAvatar } alt="" />
                    <span className="followerName">
                      {friend && friend.username && friend.username
                        .split(' ')
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(' ')
                      }
                  </span>
                  </div>
                </Link>
              ))}
        </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar/> : <HomeRightbar/>}
      </div>
    </div>
  )
}
