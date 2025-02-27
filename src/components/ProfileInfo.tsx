import React from 'react'

const ProfileInfo = () => {
  return (
    <div className="casino-banner profile-banner">
        <div className="container-1470">
          <div className="casino-row g-0 profile-row">
            <div className="profile-heading">
              <h2>My Profile</h2>
            </div>
            <div className="main-div-form">
              <div className="form-container">
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" placeholder="Enter your name" />
                </div>
                <div className="form-group">
                    <label>User Name</label>
                    <input type="text" placeholder="Enter your user name" />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <div className="sub-group-div">
                        <input type="email" placeholder="Email" />
                        <button className="verify-btn email-verify"><img src="/img/bx_shield-x.png" alt=""/> Go To Verify <img className="input-arrow" src="/img/input-arrow (1).png" alt=""/></button>
                    </div>
                </div>
                <div className="form-group">
                    <label>Mobile Number</label>
                    <div className="sub-group-div">
                        <input type="text" value="******2329" />
                        <button className="verify-btn mobile-verify"><img src="/img/bx_shield-x.png" alt=""/> Go To Verify <img className="input-arrow" src="/img/input-arrow (1).png" alt=""/></button>
                    </div>
                </div>
                <div className="form-group">
                    <label>Birthday</label>
                    <div className="date-input">
                        <input type="text" placeholder="mm / dd / yy" />
                        <div className="solar-icon">
                          <img src="/img/solar_calendar-bold (1).png" alt=""/>
                        </div>
                    </div>
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

export default ProfileInfo
