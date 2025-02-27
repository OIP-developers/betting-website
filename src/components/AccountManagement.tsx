import React from 'react'

const AccountManagement = () => {
  return (
    <div>
       <div className="casino-banner profile-banner payment-setting security-setting account-manag-sec">
        <div className="container-1470">
          <div className="casino-row g-0 profile-row payment-setting-row security-setting-row">
            <div className="profile-heading">
              <h2>Account management</h2>
            </div>
            <div className="main-div-form">
              <div className="form-container">
                <div className="two-factor-auth management-factor">
                  <div className="verifi-main">
                   <label>Status:</label>
                  </div>
                  <div className="status-main">
                     <span className="status-text">Active</span>
                  </div>
                 </div>
              <div className="two-factor-auth management-factor">
               <div className="verifi-main">
                <label>Verification:</label>
               </div>
               <div className="status-main">
                  <span className="status-text">Verified</span>
               </div>
              </div>
                <div className="transaction-main management-delete">
                  <button className="payment-btn">
                      <a href="">Delete Account <img src="assets/img/method-arrow.png" alt=""/></a>
                  </button>
              </div>              
                <button className="submit-btn">Confirm And Save</button>
            </div>
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
    </div>
  )
}

export default AccountManagement
