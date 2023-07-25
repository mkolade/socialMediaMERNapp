import { useContext, useRef,useEffect } from 'react'
import './Login.css'
import { loginCall } from '../../apiCalls'
import { AuthContext } from '../../context/AuthContext'
import  CircularProgress from '@mui/material/CircularProgress'
import Swal from 'sweetalert'
export default function Login() {

  const email = useRef()
  const password = useRef()
  const {user,isFetching,error,dispatch} = useContext(AuthContext)

  useEffect(() => {
    // Check if user data is available in local storage
    const userData = localStorage.getItem('socialMediaUser');
    if (userData) {
      dispatch({ type: 'LOGIN_SUCCESS', payload: JSON.parse(userData) });
    }
    
  }, [dispatch]);

  const handleSubmit = (e) =>{
    e.preventDefault()
    try{
      loginCall({email:email.current.value,password:password.current.value},dispatch)
    }catch(err){
      console.log(err)
      if(err){
        Swal.fire({
          icon:'error',
          title:'Oops ..',
          text:err.message
        })
      }
    }
    
    
  }
  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
            <div className="loginLogo">Mksocial</div>
            <div className="loginDesc">Connect with friends and family all over the globe on Mksocial</div>
        </div>
        <div className="loginRight">
            <form className="loginForm" onSubmit={handleSubmit}>
            {error && (
              
              <div>
              {console.log(error.response.data.error)}
                {error.response.data.error}
              </div>
            )}
                <input 
                  placeholder="Email"
                  required
                  type='email' 
                  className="loginInput" 
                  ref={email}
                  />
                <input 
                  placeholder="Password" 
                  type='password' 
                  required
                  className="loginInput" 
                  minLength={'6'}
                  ref={password}
                />
                <button className="loginSubmit" type='submit' disabled={isFetching}>
                  {isFetching ? <CircularProgress color="inherit"  size='15px'/> : "Log in"}
                </button>
                <span className="loginForgot">Forgot Password?</span>
                <button className="loginCreateNew">
                  {isFetching ? <CircularProgress color="inherit"  size='15px'/> : "Create new account"}
                </button>
                
            </form>
        </div>
      </div>
    </div>
  )
}
