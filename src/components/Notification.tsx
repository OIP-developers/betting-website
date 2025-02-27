import React from 'react'

const Notification = () => {
  return (
    <div className="casino-banner profile-banner payment-setting security-setting">
    <div className="container-1470">
      <div className="casino-row g-0 profile-row payment-setting-row security-setting-row">
        <div className="profile-heading">
          <h2>Notification Settings</h2>
        </div>
        <div className="main-div-form">
          <div className="form-container">
              <div className="two-factor-auth">
                <label>Email Notification: <span className="status-text">Enabled</span></label>
                <label className="switch">
                    <input type="checkbox" checked />
                    <span className="slider round"></span>
                </label>
            </div>
            <div className="two-factor-auth disabled-factor">
              <label>Email Notification: <span className="status-text">Disabled</span></label>
              <label className="switch disabled-switch">
                  <input type="checkbox" checked />
                  <span className="slider round disabled-slid"></span>
              </label>
          </div>
            <div className="transaction-main">
              <div className="tran-sub opted-div">
                <p>Marketing Preferences: <a href="#" className="view-more">Opted In</a></p>
              </div>
              <button className="payment-btn">
                  <a href="" />Edit Preferences <img src="assets/img/method-arrow.png" alt="" />
              </button>
          </div>              
            <button className="submit-btn">Confirm And Save</button>
        </div>
        </div>
      </div>
    </div>
    <div className="casino-left-img">
        <img src="assets/img/casino-left-img.png" alt="" />
    </div>
    <div className="casino-right-img">
        <img src="assets/img/casino-right-img.png" alt=""/>
    </div>
  </div>
  )
}

export default Notification
