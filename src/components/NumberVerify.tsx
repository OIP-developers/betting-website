import React from 'react'

const NumberVerify = () => {
  return (
    <div className="casino-banner verify-number-banner">
    <div className="container-1470">
      <div className="casino-row g-0 verify-number-row">
        <div className="otp-container">
            <div className="closed-btndiv">
                <button className="close-btn-icon"><img src="assets/img/closed-icon.png" alt="" /></button>
            </div> 
            <div className="otp-header">
                <h2>Verify Phone Number</h2>
            </div>
            <div className="input-group">
                <div className="country-code">
                    <img src="assets/img/ind-flag.png" alt="India Flag" />
                    <span>+91</span>
                </div>
                <input type="text" value="******2329" />
            </div>
            <div className="otp-button">
                <button>SMS OTP</button>
            </div>
            <div className="resend-section">
                <span>SMS OTP</span> 
                <span>15s Resend</span>
            </div>
            <div className="input-group sm-input">
                <input type="text" placeholder="Enter SMS OTP code" />
            </div>
            <div className="voice-button-main">
                <button className="voice-otp-btn">Confirm Voice OTP Code</button>
            </div>
        </div>
      </div>
    </div>
    <div className="casino-left-img">
        <img src="assets/img/casino-left-img.png" alt="" />
    </div>
    <div className="casino-right-img">
        <img src="assets/img/casino-right-img.png" alt="" />
    </div>
  </div>
  )
}

export default NumberVerify
