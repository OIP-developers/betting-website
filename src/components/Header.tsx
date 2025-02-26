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
  );
};

export default Header;
