"use client";

import React, { useState } from "react";
import Image from "next/image";

const Sports = () => {
  
  
  return (
    <div>
       <div className="casino-banner sport-inner-banner">
        <div className="container-1470">
          <div className="casino-row g-0">
              <div className="casino-heading">
                <h1 className="casino-heading">SPORTS</h1>
                <div className="casino-img sport-inner-img">
                    <img src="/img/sport-inner-img.png" alt=""/>
                  </div>
              </div>
            </div>
        </div>
        <div className="winner-row">
            <div className="Latest Winner">
                <h3>Latest Winner</h3>
            </div>
            <div className="main-folder">
                <div className="content-slider">
                    <div className="sub-main">
                        <img src="/img/slider-p.png" alt=""/>
                        <p>₹ 1,000 Samuels</p>
                    </div>
                    <div className="sub-main">
                        <img src="/img/slider-p.png" alt=""/>
                        <p>₹ 1,000 Samuels</p>
                    </div>
                    <div className="sub-main">
                        <img src="/img/slider-p.png" alt=""/>
                        <p>₹ 1,000 Aditi</p>
                    </div>
                    <div className="sub-main">
                        <img src="/img/slider-p.png" alt=""/>
                        <p>₹ 1,000 Parvati</p>
                    </div>
                    <div className="sub-main">
                        <img src="/img/slider-p.png" alt=""/>
                        <p>₹ 1,000 Vishnu</p>
                    </div>
                    <div className="sub-main">
                        <img src="/img/slider-p.png" alt=""/>
                        <p>₹ 1,000 Arnav</p>
                    </div>
                    <div className="sub-main">
                        <img src="/img/slider-p.png" alt=""/>
                        <p>₹ 1,000 Parvati</p>
                    </div>
                    <div className="sub-main">
                        <img src="/img/slider-p.png" alt=""/>
                        <p>₹ 1,000 Parvati</p>
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
      <div className="all-games-sec">
        <div className="container-1470">
            <div className="games-all-row">
                <h2>CRICKET</h2>
                <h2>FOOTBALL</h2>
                <h2>KABADDI</h2>
                <h2>TENNIS</h2>
            </div>
            <div className="games-detail-row">
              <div className="scoreboard">
                <div className="header">
                    <span>🌍 ICC Champions Trophy</span>
                </div>
                <div className="teams-main-fold">
                  <div className="teams">
                    <div>Afghanistan <span>0/0</span></div>
                    <div>South Africa <span>315/6</span></div>
                </div>
                  <div className="odds-table">
                    <div className="highlight">4.1</div>
                    <div>-</div>
                    <div>1.18</div>
                    <div>4.11</div>
                    <div>50</div>
                    <div>1.18</div>
                    <div>1.82</div>
                </div>
                </div>
            </div>
            </div>
            <div className="table-container">
              <div className="match-details">
                  <span>🌍 ICC Champions Trophy</span>
                  <span>📊 +104</span>
              </div>
              <table>
                  <thead>
                      <tr>
                          <th>Team</th>
                          <th>Score</th>
                          <th>1</th>
                          <th>-</th>
                          <th>2</th>
                          <th>1</th>
                          <th>X</th>
                          <th>2</th>
                          <th>0</th>
                          <th>Total</th>
                          <th>U</th>
                          <th>(Over) T1</th>
                          <th>U</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td className="team-info"><img className="team-icon" src="afghanistan-icon.png" alt="AFG" /> Afghanistan</td>
                          <td>0/0</td>
                          <td className="highlight">4.1</td>
                          <td>-</td>
                          <td>1.18</td>
                          <td>4.11</td>
                          <td>50</td>
                          <td>1.18</td>
                          <td>-</td>
                          <td>-</td>
                          <td>-</td>
                          <td>1.82</td>
                          <td>4</td>
                          <td>1.84</td>
                      </tr>
                      <tr>
                          <td className="team-info"><img className="team-icon" src="southafrica-icon.png" alt="SA" /> South Africa</td>
                          <td>315/6</td>
                          <td colSpan={12}></td>
                      </tr>
                  </tbody>
              </table>
          </div>
        </div>
      </div>
      <div className="sec-6 gaming-policies">
        <div className="container-1470">
          <div className="policies-row">
            <div className="policies-container">
              <span>License info</span>
              <select>
                  <option></option>
                  <option></option>
                  <option></option>
              </select>
            </div>
            <div className="policies-container">
              <span>responsible gaming policies</span>
              <select>
                  <option></option>
                  <option></option>
                  <option></option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sports;
