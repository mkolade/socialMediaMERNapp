import './Login.css'
export default function Login() {
  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
            <div className="loginLogo">Mksocial</div>
            <div className="loginDesc">Connect with friends and family all over the globe on Mksocial</div>
        </div>
        <div className="loginRight">
            <form className="loginForm">
                <input placeholder="Email" type='email' className="loginInput" />
                <input placeholder="Password" type='password' className="loginInput" />
                <button className="loginSubmit" type='submit'>Log in</button>
                <span className="loginForgot">Forgot Password?</span>
                <button className="loginCreateNew">Create new account</button>
            </form>
        </div>
      </div>
    </div>
  )
}
