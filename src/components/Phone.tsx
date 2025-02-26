import Link from 'next/link'
import React from 'react'

const Phone = () => {
  return (
    <div>
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
                <img src="/img/closed-icon.png" alt=""/>
              </div>
              <div className="login-header">
                  <h2>Login</h2>
              </div>
              <div className="login-toggle">
                <Link href='/login'>
                
                  <button><a href="#"><img src="/img/qlementine-icons2.png" alt=""/>User ID</a> </button>
                </Link>

                  <button className="active"><a href=""><img src="/img/iconoir_phone-solid.png" alt=""/>Phone</a></button>
                  
              </div>
              <form>
                  <div className="phone-input">
                    <div className="country-code">
                        <img src="/img/flag-ind.png" alt="India Flag" />
                        <span>+91</span>
                    </div>
                    <input type="text" placeholder="Phone Number" />
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
                  <span>Don’t have an account?</span> 
                  <a href="#">Registration</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Phone
