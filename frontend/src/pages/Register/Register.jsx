import './Register.css'

export default function Register() {
  return (
    <div>
        <div className='register'>
            <div className="registerWrapper">
                <div className="registerLeft">
                    <div className="registerLogo">Mksocial</div>
                    <div className="registerDesc">Connect with friends and family all over the globe on Mksocial</div>
                </div>
                <div className="registerRight">
                    <form className="registerForm">
                        <input placeholder="Email" type='email' className="registerInput" />
                        <input placeholder="Username" type='username' className="registerInput" />
                        <input placeholder="Password" type='password' className="registerInput" />
                        <button className="registerSubmit" type='submit'>Sign up</button>
                        <button className="registerCreateNew">Log into account</button>
                    </form>
                </div>
            </div>
        </div>  
    </div>
  )
}
