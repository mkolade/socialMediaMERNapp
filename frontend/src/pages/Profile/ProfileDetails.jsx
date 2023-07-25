import React from 'react'
import './Profile.css'

const ProfileDetails = () => {
  return (
    <div className='detailsWrapper'>
        <div className='detailsForm'>
            <form action="" className="mainForm">
                <div className='detailsContainer'>
                    <label htmlFor="">Profile Bio</label>
                    <input 
                        type="text"
                        placeholder='Enter your profile bio'
                        required
                        name='okay'
                        className='detailsInput'
                    />
                </div>
                <div className='detailsContainer'>
                    <label htmlFor="">Where are you from ?</label>
                    <input 
                        type="text"
                        required
                        name='okay'
                        className='detailsInput'
                    />
                </div>
                <div className='detailsContainer'>
                    <label htmlFor="">Where do you live currently ?</label>                
                    <input 
                        type="text"
                        required
                        name='okay'
                        className='detailsInput'
                    />
                </div>
                
                <div className='detailsContainer'>
                    <label htmlFor="">Relationship status ?</label>                
                    <input 
                        type="text"
                        required
                        name='okay'
                        className='detailsInput'
                    />
                </div>
            </form>
        </div>
    </div>
  )
}

export default ProfileDetails