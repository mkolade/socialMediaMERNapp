import React, { useContext, useRef,useState } from 'react'
import './Profile.css'
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios'
import swal from 'sweetalert'

const ProfileDetails = () => {

    const {user} = useContext(AuthContext)
    const PF_SERVER = import.meta.env.VITE_PF_SERVER
    const [selectedOption, setSelectedOption] = useState('');
    const options = [
        { value: '1', label: 'Single' },
        { value: '2', label: 'Married' },
        { value: '3', label: 'Complicated' },
        
    ];

    const [desc,setDesc] = useState('')
    const [from,setFrom] = useState('')
    const [city,setCity] = useState('')
    const [password,setPassword] = useState('')

    const handleOptionChange = (e) =>{
        setSelectedOption(e.target.value)
    }

    const handleSubmit =async (e) =>{
        e.preventDefault()
        if(selectedOption){
            const userDetails ={
                userId:user._id,
                desc:desc,
                from:from,
                password:password,
                city:city,
                relationship:selectedOption
            }
            try{
               const res = await axios.put(PF_SERVER + "users/"+ user._id,userDetails)
                console.log(res)
                swal({
                    title: "Success!",
                    text: res.data,
                    icon: "success",
                    button: "Go ahead",
                  });
            }catch(err){
                console.log(err)
            }
        }
    }

    

    
  return (
    <div className='detailsWrapper'>
        <div className='detailsForm'>
            <form action="" className="mainForm" onSubmit={handleSubmit}>
                <div className='detailsContainer'>
                    <label htmlFor="">Profile Bio</label>
                    <input 
                        type="text"
                        required
                        name='okay'
                        className='detailsInput'
                       
                        value={user.desc? user.desc : ""}
                        onChange={(e) =>setDesc(e.target.value)}
                    />
                </div>
                <div className='detailsContainer'>
                    <label htmlFor="">Where are you from ?</label>
                    <input 
                        type="text"
                        required
                        name='okay'
                        className='detailsInput'
                        value={user.from? user.from : ""}
                        onChange={(e) =>setFrom(e.target.value)}
                    />
                </div>
                <div className='detailsContainer'>
                    <label htmlFor="">Where do you live currently ?</label>                
                    <input 
                        type="text"
                        required
                        name='okay'
                        className='detailsInput'
                        value={user.city? user.city : ""}
                        onChange={(e) =>setCity(e.target.value)}
                    />
                </div>
                
                <div className='detailsContainer'>
                    <label htmlFor="">Relationship status ?</label>                
                    
                    <div >
                        <select
                        value={selectedOption}
                        onChange={handleOptionChange}
                        >
                        <option value="" className='detailsInput'>Select an option</option>
                        {options.map((option) => (
                            <option key={option.value} value={option.value}>
                            {option.label}
                            </option>
                        ))}
                        </select>
                    </div>
                </div>

                <div className='detailsContainer'>
                    <label htmlFor="">Confirm update with password</label>                
                    <input 
                        type="password"
                        required
                        name='okay'
                        className='detailsInput'
                        value={password}
                        onChange={(e) =>setPassword(e.target.value)}
                    />
                </div>

                <button type="submit">Save details</button>
            </form>
        </div>
    </div>
  )
}

export default ProfileDetails