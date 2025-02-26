import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <div className="login-banner">
    <div className="container-1470">
      <div className="login-banner-row">
        <div className="login-text">
          <h1>LOGIN</h1>
        </div>
      </div>
      <div className="login-row">
        <div className="login-container">
          <div className="closed-button">
            <Link href='/'>
            <img src="/img/closed-icon.png" alt=""/>
            </Link>
          </div>
          <div className="login-header">
              <h2>Login</h2>
          </div>
          <div className="login-toggle">
          {/* <Link href="/register"> */}
              <button className="active"><a href=""><img src="/img/qlementine-icons_user-24.png" alt=""/>User ID</a> </button>
          {/* </Link>  */}
            
            <button><a href="/call"><img src="/img/phone-solid.png" alt=""/>Phone</a></button>
            
          </div>
          <form>
              <div className="input-group">
                  <input type="text" placeholder="User ID" />
              </div>
              <div className="input-group bottom-input">
                  <input type="password" placeholder="Password" />
                  <button className="toggle-password"><img className="eye-div" src="/img/formkit_eyeclosed.png" alt=""/></button>
              </div>
              <div className="forgot-password">
                  <img src="/img/qmark.png" alt=""/>
                  
                  <a href="forgotPassword">Forgot Password</a>
              </div>
              <button className="login-btn">Login</button>
          </form>
          <div className="register-link">
              <span><a href='register'>Don’t have an account?</a></span> 
              <a href="register">Registration</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login
