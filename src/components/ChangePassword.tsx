import React from 'react'

const ChangePassword = () => {
  return (
    <div className="casino-banner change-password">
        <div className="container-1470">
          <div className="casino-row g-0 change-pas-row">
            <div className="login-container forgott-container change-password">
                <div className="closed-button">
                  <img src="assets/img/closed-icon.png" alt=""/>
                </div>
                <div className="login-header">
                    <h2>Change Password</h2>
                </div>
                <form>
                    <div className="input-group">
                      <h3>Current Password</h3>
                        <div className="input-sub-gp ">
                          <input type="password" placeholder="Enter your current password" />
                          <button className="toggle-password"><img className="eye-div" src="assets/img/formkit_eyeclosed.png" alt=""/></button>
                        </div>
                    </div>
                    <div className="input-group">
                      <h3>New Password</h3>
                        <div className="input-group">
                          <input type="password" placeholder="Enter new password" />
                          <button className="toggle-password"><img className="eye-div" src="assets/img/formkit_eyeclosed.png" alt=""/></button>
                        </div>
                    </div>
                    <div className="input-group">
                      <h3>Confirm Password</h3>
                      <div className="input-group">
                        <input type="password" placeholder="Enter confirm password" />
                        <button className="toggle-password"><img className="eye-div" src="assets/img/formkit_eyeclosed.png" alt=""/></button>
                      </div>
                    </div>
                    <div className="confirm-pass">
                      <button className="login-btn">Confirm And Save</button>
                    </div>
                </form>
              </div>
          </div>
        </div>
        <div className="casino-left-img">
            <img src="assets/img/casino-left-img.png" alt=""/>
        </div>
        <div className="casino-right-img">
            <img src="assets/img/casino-right-img.png" alt=""/>
        </div>
      </div>
  )
}

export default ChangePassword
