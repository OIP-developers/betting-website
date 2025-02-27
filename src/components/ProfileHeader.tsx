import Link from 'next/link'
import React from 'react'

const ProfileHeader = () => {
  return (
    <div>
       <header>
   <div className="container-1470">
       <div className="row desktop-header g-0 profile-header">
           <div className="header-logo">
               <img src="/img/logo-img.png" alt=""/>
           </div>
           <div className="ManuBar profile-manu">
           <ul>
            <li>
                <Link href="/">HOME</Link>
              </li>
              <li>
                <Link href="/casino">Casino</Link>
              </li>
              <li>
                <Link href="/Sports">Sports</Link> {/* or /sports if you rename the folder */}
              </li>
            </ul>
             </div>
             <div className="icon-header profile-header-icon">
               <div className="icon-onemain">
                 <img src="/img/icon-h1.png" alt=""/>
               </div>
              <div className="icon-maintwo">
               <img src="/img/Vector-h2.png" alt=""/>
              </div>
               <div className="zero-text">
                 <span>0</span>
               </div>
              <div className="ind-rup">
               <img src="/img/icon-h2.png" alt=""/>
              </div>
             </div>
             <div className="buttons-main profile-main-btn">
               <div className="button profile-btn">
                 <a href="#"><img className="icon-imgone" src="/img/button-icon.png" alt=""/>Deposit <img src="/img/button-arrow.png" alt=""/></a>
               </div>
               <div className="header-img">
                 <img src="/img/Ellipse 96.png" alt=""/>
               </div>
             </div>
       </div>
   </div>
 </header>
    </div>
  )
}

export default ProfileHeader
