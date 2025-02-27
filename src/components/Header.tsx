"use client";
import Link from 'next/link';
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="container-1470">
        <div className="row desktop-header g-0">
          <div className="header-logo">
            <img src="/img/logo-img.png" alt="Logo" />
          </div>
          <div className="ManuBar">
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
          <div className="buttons-main">
            <div className="button">
              <Link href="/register">
                Sign up{' '}
                <img
                  src="/img/Vector - 2025-02-13T142841.083.png"
                  alt="Sign in Icon"
                />
              </Link>
            </div>
            <div className="button">
              <Link href="/login">
                Sign In{' '}
                <img
                  src="/img/Vector - 2025-02-13T142841.083.png"
                  alt="Sign in Icon"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="row mobile-header g-0">
          <div className="header-logo">
            <img src="/img/logo-img.png" alt="Logo" />
          </div>
          <div className="mobile-menu-icon" onClick={toggleMenu}>
            ☰
          </div>
          <nav className={`ManuBar ${menuOpen ? 'open' : ''}`}>
            <ul>
              <li>
                <a href="#">HOME</a>
              </li>
              <li>
                <a href="#">Casino</a>
              </li>
              <li>
                <a href="#">Sports</a>
              </li>
              <li className="button">
                <a href="#">Connect Wallet</a>
              </li>
              <li className="button">
                <a href="#">Connect Wallet</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

    </header>
  //   <header>
  //   <div className="container-1470">
  //       <div className="row desktop-header g-0 profile-header">
  //           <div className="header-logo">
  //               <img src="/img/logo-img.png" alt=""/>
  //           </div>
  //           <div className="ManuBar profile-manu">
  //           <ul>
  //            <li>
  //                <Link href="/">HOME</Link>
  //              </li>
  //              <li>
  //                <Link href="/casino">Casino</Link>
  //              </li>
  //              <li>
  //                <Link href="/Sports">Sports</Link> {/* or /sports if you rename the folder */}
  //              </li>
  //            </ul>
  //             </div>
  //             <div className="icon-header profile-header-icon">
  //               <div className="icon-onemain">
  //                 <img src="/img/icon-h1.png" alt=""/>
  //               </div>
  //              <div className="icon-maintwo">
  //               <img src="/img/Vector-h2.png" alt=""/>
  //              </div>
  //               <div className="zero-text">
  //                 <span>0</span>
  //               </div>
  //              <div className="ind-rup">
  //               <img src="/img/icon-h2.png" alt=""/>
  //              </div>
  //             </div>
  //             <div className="buttons-main profile-main-btn">
  //               <div className="button profile-btn">
  //                 <a href="#"><img className="icon-imgone" src="/img/button-icon.png" alt=""/>Deposit <img src="/img/button-arrow.png" alt=""/></a>
  //               </div>
  //               <div className="header-img">
  //                 <img src="/img/Ellipse 96.png" alt=""/>
  //               </div>
  //             </div>
  //       </div>
  //   </div>
  // </header>
  );
};

export default Header;
