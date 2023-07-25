import { useRef } from 'react'
import './Register.css'
import  CircularProgress from '@mui/material/CircularProgress'
import swal from 'sweetalert'
import axios from 'axios'
import { useNavigate,Link  } from 'react-router-dom'


export default function Register() {
    const email = useRef()
    const username = useRef()
    const password = useRef()
    const passwordAgain = useRef()

    const PF_SERVER = import.meta.env.VITE_PF_SERVER

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
               await axios.post(PF_SERVER + 'auth/register',user)
                console.log('user created')
                navigate('/login')
            }catch(err){
                console.log(err)
                swal({
                    title: "Error!",
                    text: err.response.data.message,
                    icon: "error",
                    button: "Enter details again",
                });
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
                        <Link to='/login' style={{textAlign:'center'}}>
                            <button className="registerCreateNew">Log into account</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>  
    </div>
  )
}
