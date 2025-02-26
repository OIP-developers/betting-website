import Link from 'next/link'
import React from 'react'

const Register = () => {
  return (
    <div className="login-banner registration-banner">
    <div className="container-1470">
      <div className="login-banner-row">
        <div className="login-text signup-text">
          <h1>SIGNUP</h1>
        </div>
      </div>
      <div className="login-row">
        <div className="login-container registration-container">
          <div className="closed-button">
            <Link href="/">
            <img src="/img/closed-icon.png" alt=""/>

            </Link>
          </div>
          <div className="login-header">
              <h2>Registration</h2>
          </div>
          <form>
              <div className="phone-input">
                <div className="country-code">
                    <img src="/img/flag-ind.png" alt="India Flag" />
                    <span>+91</span>
                </div>
                <input type="text" placeholder="Phone Number"/>
            </div>
              <div className="input-group bottom-input">
                  <input type="password" placeholder="Password"/>
                  <button className="toggle-password"><img className="eye-div" src="/img/formkit_eyeclosed.png" alt=""/></button>
              </div>
              <div className="labelmain">
                <label className="checkbox-container">
                  <input type="checkbox" />
                  <h5>I have confirmed <span>the phone number filled in is correct</span>, and cannot be changed after registration.</h5>
              </label>
              </div>
            <div className="success-main">
              <div className="success-box">
                <div className="check-img">
                  <img src="/img/icon-park-solid_check-one.png" alt="Success"/>
                </div> 
                <p>Success!</p>
              </div>
              <div className="cloudflare">
                <div className="cloud-img">
                  <img src="/img/cloudflare_logo.svg.png" alt="Cloudflare"/> 
                </div>
                <div className="polocy-text">
                  <a href="#">Privacy</a> 
                  <a href="#">Terms</a>
                </div>
            </div>
            </div>

            <button className="login-btn">Confirm Registration</button>
          </form>
          <div className="register-link">
          <span>  <a href="login">Have an account? </a></span>
              <a href="#">Registration</a>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Register
