import Link from 'next/link'
import React from 'react'

const ForgotPassword = () => {
  return (
    <div className="login-banner forgott-banner">
    <div className="container-1470">
      <div className="login-row">
        <div className="login-container forgott-container">
          <div className="closed-button">
            <Link href="/">
            
            <img src="/img/closed-icon.png" alt=""/>
            </Link>
          </div>
          <div className="login-header">
              <h2>Change Password</h2>
          </div>
          <form>
              <div className="input-group">
                <h3>Current Password</h3>
                  <div className="input-sub-gp ">
                    <input type="password" placeholder="Enter your current password" />
                    <button className="toggle-password"><img className="eye-div" src="/img/formkit_eyeclosed.png" alt=""/></button>
                  </div>
              </div>
              <div className="input-group">
                <h3>New Password</h3>
                  <div className="input-group">
                    <input type="password" placeholder="Enter new password" />
                    <button className="toggle-password"><img className="eye-div" src="/img/formkit_eyeclosed.png" alt=""/></button>
                  </div>
              </div>
              <div className="input-group">
                <h3>Confirm Password</h3>
                <div className="input-group">
                  <input type="password" placeholder="Enter confirm password" />
                  <button className="toggle-password"><img className="eye-div" src="/img/formkit_eyeclosed.png" alt=""/></button>
                </div>
              </div>
              <div className="confirm-pass">
                <button className="login-btn">Confirm And Save</button>
              </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ForgotPassword
