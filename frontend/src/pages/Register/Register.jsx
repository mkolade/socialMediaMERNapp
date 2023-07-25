import { useRef, useState } from 'react'
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
    const [isFetching,setIsFetching] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = async (e) =>{
        e.preventDefault()
        setIsFetching(true)
        if(passwordAgain.current.value !== password.current.value){
            passwordAgain.current.setCustomValidity("Passwords don't match!")
            setIsFetching(false)
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
                setIsFetching(false)
            }catch(err){
                swal({
                    title: "Error!",
                    text: err.response.data.message,
                    icon: "error",
                    button: "Enter details again",
                });
                setIsFetching(false)
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
                        <button className="registerSubmit" type='submit' disabled={isFetching}>
                            {isFetching ? <CircularProgress color="inherit"  size='15px'/> : "Sign up"}
                        </button>
                        <Link to='/login' style={{textAlign:'center'}}>
                            <button className="registerCreateNew" disabled={isFetching}>
                                {isFetching ? <CircularProgress color="inherit"  size='15px'/> : "Log into account"}
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>  
    </div>
  )
}
