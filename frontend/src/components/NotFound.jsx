import React from 'react'
import TopBar from './TopBar'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='notOkay'>
        <TopBar/>
        <div className="notFound">
           <h2>
           Oops. 404 page not found. <br />
           Go back to <Link to={"/"}> homepage</Link>

           </h2>
        </div>
    </div>
   
    
  )
}

export default NotFound