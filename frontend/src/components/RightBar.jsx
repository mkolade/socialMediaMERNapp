import React from 'react'
import { Users } from '../dummyData'

export default function RightBar() {
  const HomeRightbar = () =>{
    return (
      <>
        <div className="birthdayContainer">
          <img src="/src/assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Chelsea Scott</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img src="src/assets/ad.png" alt="" className="rightbarAds" />
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
            <span className="profileRightbarInfoKey">City:</span>
            <span className="profileRightbarInfovalue">New york</span>
          </div>
          <div className="profileRightbarInfoItem">
            <span className="profileRightbarInfoKey">From:</span>
            <span className="profileRightbarInfovalue">Manchester</span>
          </div>
          <div className="profileRightbarInfoItem">
            <span className="profileRightbarInfoKey">Relationship Status:</span>
            <span className="profileRightbarInfovalue">Complicated</span>
          </div>
        </div>

        <h4 className='profileRightbarTitle'>Following</h4>
        <div className="profileFollowings">
          <div className="profileFollower">
            <img className='followerImg' src="src/assets/person/2.jpeg" alt="" />
            <span className="followerName">Albino Guy</span>
          </div>
          <div className="profileFollower">
            <img className='followerImg' src="src/assets/person/2.jpeg" alt="" />
            <span className="followerName">Albino Guy</span>
          </div>
          <div className="profileFollower">
            <img className='followerImg' src="src/assets/person/2.jpeg" alt="" />
            <span className="followerName">Albino Guy</span>
          </div>
          <div className="profileFollower">
            <img className='followerImg' src="src/assets/person/2.jpeg" alt="" />
            <span className="followerName">Albino Guy</span>
          </div>
          <div className="profileFollower">
            <img className='followerImg' src="src/assets/person/2.jpeg" alt="" />
            <span className="followerName">Albino Guy</span>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <ProfileRightbar/>
      </div>
    </div>
  )
}
