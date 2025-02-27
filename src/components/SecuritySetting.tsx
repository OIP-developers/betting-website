import React from 'react'

const SecuritySetting = () => {
  return (
    <div className="casino-banner profile-banner payment-setting security-setting">
    <div className="container-1470">
      <div className="casino-row g-0 profile-row payment-setting-row security-setting-row">
        <div className="profile-heading">
          <h2>Security Setting</h2>
        </div>
        <div className="main-div-form">
          <div className="form-container">
            <div className="form-group">
              <label>Password</label>
              <div className="sub-group-div">
                  <input type="text" value="******"/>
                  <button className="verify-btn mobile-verify"> Change <img className="input-arrow" src="/img/input-arrow (1).png" alt=""/></button>
              </div>
          </div>
          <div className="two-factor-auth">
            <label>Two - Factor authentication: <span className="status-text">Enabled</span></label>
            <label className="switch">
                <input type="checkbox" checked/>
                <span className="slider round"></span>
            </label>
        </div>
            <div className="transaction-main">
              <div className="tran-sub">
                <p>Login history: <a href="#" className="view-more">View More</a></p>
              </div>
              <button className="payment-btn">
                  <a href="">Manage Devices</a> <img src="/img/method-arrow.png" alt=""/>
              </button>
          </div>              
            <button className="submit-btn">Confirm And Save</button>
        </div>
        </div>
      </div>
    </div>
    <div className="casino-left-img">
        <img src="/img/casino-left-img.png" alt=""/>
    </div>
    <div className="casino-right-img">
        <img src="/img/casino-right-img.png" alt=""/>
    </div>
  </div>
  )
}

export default SecuritySetting
