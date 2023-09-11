import React from 'react'
import TopBar from "./TopBar"

const FollowPage = () => {
  return (
    <>
        <TopBar/>
        <main className='followPage'>

            <div className='mainHeading'>
                <h1>Is this your first time here?</h1>
                <h2>Get your Timeline set up by following these accounts.</h2>
            </div>
            <div className="accountsTab">
                <div className='account'>
                    ok
                </div>
                <div className='account'>
                    ok
                </div>
            </div>
        </main>
    </>
  )
}

export default FollowPage