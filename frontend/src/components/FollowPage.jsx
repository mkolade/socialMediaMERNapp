import React from 'react'
import TopBar from "./TopBar"
import { Link } from 'react-router-dom'
import person3 from '/assets/person/person3.jpeg'
import person4 from '/assets/person/person4.jpeg'

const FollowPage = () => {
  return (
    <div className='followPages'>
        <TopBar/>
        
        <main className='followPage'>
            <div className='mainHeading'>
                <h1>Is this your first time here?</h1>
                <h2>Get your Timeline set up by following these accounts.</h2>
            </div>
            <div className="accountsTab">
                <div className='account'>
                    <Link to={'/profile/jane'} style={{textDecoration:"none"}}>
                        <div className="accountOwner" >
                            <img className='accountImg' src={person3} alt="" />
                            <span className="accountName"> Jane </span>
                        </div>
                    </Link>
                </div>
                <div className='account'>
                    <Link to={'/profile/janet'} style={{textDecoration:"none"}}>
                        <div className="accountOwner" >
                            <img className='accountImg' src={person4} alt="" />
                            <span className="accountName"> Janet </span>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='links'>
            <a href="/profileDetails">
                <button className='skipButton'>
                    Next
                </button>
            </a>
            <a href="/">
                <button className='skipButton'>
                    Skip
                </button>
            </a>    
            </div>
            
        </main>
    </div>
  )
}

export default FollowPage