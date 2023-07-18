import React from 'react'
import { Users } from '../dummyData'

export default function RightBar({user}) {

  
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
    const PF_PERSON = import.meta.env.VITE_PF_PERSON
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
            <div className="profileFollower" >
              <img className='followerImg' src={PF_PERSON +  'person1.jpeg'} alt="" />
              <span className="followerName">Linda Norton</span>
            </div>
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
