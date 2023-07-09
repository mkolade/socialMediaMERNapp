import { useContext, useRef } from 'react'
import './Login.css'
import { loginCall } from '../../apiCalls'
import { AuthContext } from '../../context/AuthContext'

export default function Login() {

  const email = useRef()
  const password = useRef()
  const {user,isFetching,error,dispatch} = useContext(AuthContext)

  const handleSubmit = (e) =>{
    e.preventDefault()
    loginCall({email,password},dispatch)
  }
  console.log(user)
  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
            <div className="loginLogo">Mksocial</div>
            <div className="loginDesc">Connect with friends and family all over the globe on Mksocial</div>
        </div>
        <div className="loginRight">
            <form className="loginForm" onSubmit={handleSubmit}>
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
                <button className="loginSubmit" type='submit'>Log in</button>
                <span className="loginForgot">Forgot Password?</span>
                <button className="loginCreateNew">Create new account</button>
            </form>
        </div>
      </div>
    </div>
  )
}
