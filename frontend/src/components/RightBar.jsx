import React from 'react'

export default function RightBar() {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="/src/assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Chelsea Scott</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img src="src/assets/ad.png" alt="" className="rightbarAds" />
        <h4 className="rightbarTitle">Online friends</h4>
        <ul className="onlineFriendsList">
          <li className="onlineFriend">
            <div className="profileImgContainer">
              <img src="/src/assets/person/2.jpeg" alt="" className="profileImg" />
              <span className="profileOnlineIcon"></span>
            </div>
            <span className="profileUsername">Albino guy</span>
          </li>
          <li className="onlineFriend">
            <div className="profileImgContainer">
              <img src="/src/assets/person/3.jpeg" alt="" className="profileImg" />
              <span className="profileOnlineIcon"></span>
            </div>
            <span className="profileUsername">Candy Fletcher</span>
          </li>
          <li className="onlineFriend">
            <div className="profileImgContainer">
              <img src="/src/assets/person/4.jpeg" alt="" className="profileImg" />
              <span className="profileOnlineIcon"></span>
            </div>
            <span className="profileUsername">Chelsea Scott</span>
          </li>
          <li className="onlineFriend">
            <div className="profileImgContainer">
              <img src="/src/assets/person/5.jpeg" alt="" className="profileImg" />
              <span className="profileOnlineIcon"></span>
            </div>
            <span className="profileUsername">Linda White</span>
          </li>
          <li className="onlineFriend">
            <div className="profileImgContainer">
              <img src="/src/assets/person/6.jpeg" alt="" className="profileImg" />
              <span className="profileOnlineIcon"></span>
            </div>
            <span className="profileUsername">Braids Norton</span>
          </li>
          <li className="onlineFriend">
            <div className="profileImgContainer">
              <img src="/src/assets/person/7.jpeg" alt="" className="profileImg" />
              <span className="profileOnlineIcon"></span>
            </div>
            <span className="profileUsername">Model ??</span>
          </li>
          <li className="onlineFriend">
            <div className="profileImgContainer">
              <img src="/src/assets/person/8.jpeg" alt="" className="profileImg" />
              <span className="profileOnlineIcon"></span>
            </div>
            <span className="profileUsername">Curly-haired chap</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
