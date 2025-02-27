import React from 'react'

const Payment = () => {
  return (
    <div className="casino-banner profile-banner payment-setting">
    <div className="container-1470">
      <div className="casino-row g-0 profile-row payment-setting-row">
        <div className="profile-heading">
          <h2>Payment Setting</h2>
        </div>
        <div className="main-div-form">
          <div className="form-container">
            <div className="form-group">
                <label>UPI ID</label>
                <input type="text" placeholder="Enter your UPI ID" />
            </div>
            <div className="form-group">
                <label>Crypto Wallet</label>
                <input type="text" placeholder="Enter your crypto wallet" />
            </div>
            <div className="transaction-main">
              <div className="tran-sub">
                <p>Transaction history: <a href="#" className="view-more">View More</a></p>
              </div>
              <button className="payment-btn">
                  <a href="">Add Payment Method</a> <img src="/img/method-arrow.png" alt=""/>
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

export default Payment
