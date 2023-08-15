import React, { useContext, useEffect, useState } from 'react'
import { Users } from '../dummyData'
import axios from 'axios'
import noAvatar from '/assets/person/noAvatar.png'
import {Link} from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import {Add,Remove} from '@mui/icons-material'
import { set } from 'mongoose'

export default function RightBar({user}) {
  const PF_PERSON = import.meta.env.VITE_PF_PERSON
  const PF_SERVER = import.meta.env.VITE_PF_SERVER
  const {user:currentUser,dispatch} = useContext(AuthContext)

  const [friends,setFriends] = useState([])
  const [followed,setFollowed] = useState(currentUser.following.includes(user?._id))

 
  

  useEffect(() =>{
        setFollowed(currentUser.following.includes(user?._id))
        console.log(currentUser)
        console.log(currentUser.following)
        if(currentUser.following.includes(user?._id)){
          console.log('yes',user?.username)
        }else{
          console.log('no',user?.username)
        }
  },[currentUser,user])

  useEffect(() =>{
    const getFriends = async() =>{
      if (!user?._id) {
        return;
      }
      try{
        const res = await axios.get(PF_SERVER + 'users/followings/' + user._id)
        setFriends(res.data)
      }catch(err){
        console.log(err)
      }
    }
    getFriends()
  },[user?._id])

  const handleFollow = async () =>{
    try{
      if(followed){
        //unfollow user
        await axios.put(PF_SERVER + "users/"+user._id+"/unfollow",{
          userId:currentUser._id
        })
        dispatch({type:"UNFOLLOW",payload:user._id})
        const storedUser = JSON.parse(localStorage.getItem(("socialMediaUser")))
        storedUser.following = storedUser.following.filter(
          (followedUserId) => followedUserId != user._id
        )
        console.log("new followings",storedUser.following)
      }else{
         //follow user
         await axios.put(PF_SERVER + "users/"+user._id+"/follow",{
          userId:currentUser._id
        })
        dispatch({type:"FOLLOW",payload:user._id})
      }
      setFollowed((prevFollowed) => !prevFollowed)
    }catch(err){
      console.log(err)
    }
  }
  
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
        {user.username !== currentUser.username &&
          <button className="rightBarFollow" onClick={handleFollow}>
            {followed ? "Unfollow" : "Follow"}
            {followed ? <Remove/> : <Add/> }
          </button>
        }
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
        {friends.length > 0 &&
          <div className="profileFollowings">
              {friends.map(friend =>(
                <Link to={'/profile/' + friend.username} style={{textDecoration:"none"}} key={friend._id}>
                  <div className="profileFollower" >
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
        }
        
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
