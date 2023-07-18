import { useRef } from 'react'
import './Register.css'
import  CircularProgress from '@mui/material/CircularProgress'
import axios from 'axios'
import { useNavigate  } from 'react-router-dom'

export default function Register() {
    const email = useRef()
    const username = useRef()
    const password = useRef()
    const passwordAgain = useRef()

    const navigate = useNavigate()

    const handleSubmit = async (e) =>{
        e.preventDefault()
        if(passwordAgain.current.value !== password.current.value){
            passwordAgain.current.setCustomValidity("Passwords don't match!")
        }else{
            const user = {
                email: email.current.value,
                username: username.current.value,
                password: password.current.value
            }
            try{
               await axios.post('http://localhost:8000/api/auth/register',user)
                console.log('user created')
                navigate('/login')
            }catch(err){
                console.log(err.response.data.message)
            }
        }
    }

  return (
    <div>
        <div className='register'>
            <div className="registerWrapper">
                <div className="registerLeft">
                    <div className="registerLogo">Mksocial</div>
                    <div className="registerDesc">Connect with friends and family all over the globe on Mksocial</div>
                </div>
                <div className="registerRight">
                    <form className="registerForm" onSubmit={handleSubmit}>
                        <input 
                            placeholder="Email" 
                            type='email' 
                            className="registerInput"
                            required 
                            ref={email}
                        />
                        <input 
                            placeholder="Username" 
                            type='text' 
                            className="registerInput"
                            required 
                            ref={username}
                        />
                        <input 
                            placeholder="Password" 
                            type='password' 
                            className="registerInput"
                            required 
                            ref={password}
                            minLength={6}
                        />
                        <input 
                            placeholder="Password again" 
                            type='password' 
                            className="registerInput"
                            required 
                            ref={passwordAgain}
                            minLength={6}
                        />
                        <button className="registerSubmit" type='submit'>Sign up</button>
                        <button className="registerCreateNew">Log into account</button>
                    </form>
                </div>
            </div>
        </div>  
    </div>
  )
}
