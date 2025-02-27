import React from 'react'

const ResponsibleGaming = () => {
  return (
    <div className="casino-banner profile-banner payment-setting">
        <div className="container-1470">
          <div className="casino-row g-0 profile-row payment-setting-row">
            <div className="profile-heading">
              <h2>Responsible gaming</h2>
            </div>
            <div className="main-div-form">
              <div className="form-container">
                <div className="form-group">
                    <label>Deposit Limit</label>
                    <input type="text" placeholder="Enter your amount INR"/>
                </div>
                <div className="form-group">
                    <label>Loss Limit</label>
                    <input type="text" placeholder="Enter your amount INR"/>
                </div>
                <div className="form-group">
                  <label>Time Limit</label>
                  <input type="text" placeholder="Duration"/>
              </div>
                <div className="transaction-main">
                  <button className="payment-btn">
                      <a href="">Set Limits </a><img src="assets/img/method-arrow.png" alt=""/>
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
  )
}

export default ResponsibleGaming
