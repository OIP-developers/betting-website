import FAQSection from "@/components/FAQSection";


export default function Home() {
  return (
    <main>
{/* 
      <header>
        <div className="container-1470">
          <div className="row">
            <div className="header-logo">
              <img src="/img/logo-img.png" alt="" />
            </div>
            {/* logo-img.png */}
            {/* <div className="ManuBar">
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Audit</a></li>
                <li><Link href="/faq">FAQ</Link></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contract</a></li>
              </ul>
            </div>
            <div className="button">
              <a href="#">Connect Wallet <img src="/img/Vector - 2025-02-13T142841.083.png" alt="" /></a>
            </div>
          </div>
        </div> */}
      {/* </header> */} 


      <div className="banner-section">
        <div className="container-1470">
          <div className="row">
            <div className="column">
              <div className="heading-text">
                <span>A trading box that generates</span>
                <h1>consistent daily profits</h1>
              </div>
              <div className="percent-text">
                <span>0/5 percent daily profit generating</span>
              </div>
              <p className="banner-p">If they predict the next 4h candle correctly, 0/1 percent will be added to their daily profit and they can repeat it 5 times</p>
              <div className="buttons-main">
                <div className="button">
                  <a href="#">Connect Wallet <img src="/img/Vector - 2025-02-13T142841.083.png" alt="" /></a>
                </div>
                <div className="button join-btn">
                  <a href="#">Join Community <img src="/img/Vector - 2025-02-13T142841.083.png" alt="" /></a>
                </div>
              </div>
            </div>
            <div className="banner-img">
              <img src="/img/banner-img.png" alt="" />
            </div>
          </div>
        </div>
        <div className="banner-img">
          <img src="/img/banner-img.png" alt="" />
        </div>
        <div className="befor-rigt">
          <img src="/img/befor-right.png" alt="" />
        </div>
        <div className="trading-main">
          <div className="container-1470">
            <div className="row-2">
              <div className="heading-text">
                <h2>Purchasing trading boxes for daily profit gains</h2>
                <div className="sub-content">
                  <p>Users can deposit USDT to purchase trading boxes.</p>
                  <p className="each-p">Each trading box represents a fixed investment amount (e.g., \$100, \$500, \$1,000)</p>
                </div>
                <div className="form-main">
                  <div className="deposit-container">
                    <span>I will deposit</span>
                    <select>
                      <option>USDT</option>
                      <option>BTC</option>
                      <option>ETH</option>
                    </select>
                  </div>
                  <div className="buy-btn">
                    <a href="#">Connect Wallet <img src="/img/Vector - 2025-02-13T142841.083.png" alt="" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add more sections here */}

      <div className="track-section">
        <div className="container-1470">
          <div className="row">
            <div className="track-heading">
              <h2>Track Daily Profits & Investment Status</h2>
            </div>
          </div>
          <div className="row-box">
            <div className="profit-main">
              <div className="profit-sub-text">
                <h3>Profit & Investment</h3>
                <span>Updated 12/02/2025</span>
              </div>
              <div className="profit-btn-main">
                <div className="button">
                  <a href="#">Connect Wallet <img src="/img/Vector - 2025-02-13T142841.083.png" alt="" /></a>
                </div>
                <div className="button reinvest-btn">
                  <a href="#">Reinvest <img src="/img/Vector - 2025-02-13T142841.083.png" alt="" /></a>
                </div>
              </div>
            </div>
            <div className="sub-row">
              <div className="balance-box">
                <div className="sub-balance-box">
                  <img src="/img/lucide_wallet.png" alt="" />
                  <span>Available Balance</span>
                </div>
                <h3>$15,125.12</h3>
              </div>
              <div className="balance-box2">
                <div className="total-invetment-div">
                  <div className="sub-balance-box">
                    <img src="/img/lucide_wallet.png" alt="" />
                    <span>Available Balance</span>
                  </div>
                  <h3>$15,125.12</h3>
                </div>
                <div className="total-invetment-div">
                  <div className="sub-balance-box">
                    <img src="/img/lucide_wallet.png" alt="" />
                    <span>Available Balance</span>
                  </div>
                  <h3>$15,125.12</h3>
                </div>
                <div className="total-invetment-div">
                  <div className="sub-balance-box">
                    <img src="/img/lucide_wallet.png" alt="" />
                    <span>Available Balance</span>
                  </div>
                  <h3>$15,125.12</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row bitcoin-row">
            <div className="track-heading">
              <h2>Join the Bitcoin Prediction Game & Win Rewards!</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            </div>
          </div>
          <div className="row bitcoin-row2">
            <div className="sub-boxmain">
              <div className="img-main">
                <img src="/img/bitcoin-graph.png" alt="" />
              </div>
            </div>
            <div className="sub-main2">
              <div className="BTC-container">
                <div className="btc-sub-heading">
                  <span>Low</span>
                </div>
                <select>
                  <option>0.2%</option>
                  <option>0.2%</option>
                  <option>0.2%</option>
                </select>
              </div>
              <div className="BTC-container high-container">
                <div className="btc-sub-heading">
                  <span>High</span>
                </div>
                <select>
                  <option>0.2% - 0.4%</option>
                  <option>0.2% - 0.4%</option>
                  <option>0.2% - 0.4%</option>
                </select>
              </div>
              <div className="btn-content">
                <h3>BTC 96,369.48 USD</h3>
              </div>
              <div className="button">
                <a href="#">Predict <img src="/img/Vector - 2025-02-13T142841.083.png" alt="" /></a>
              </div>
              <div className="bottom-content">
                <span>Balance $1,000.00</span>
                <span className="cent-spn">Wins0</span>
                <span>Losses</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="choose-section">
        <div className="container-1470">
          <div className="row-choose">
            <h2>WHY CHOOSE US</h2>
            <div className="subchoose">
              <div className="column choose ">
                <div className="first-boxs">
                  <div className="choose-img">
                    <div className="main-fimg">
                      <img src="/img/choose-1 (1).png" alt="" />
                    </div>
                    <h4>Security First</h4>
                    <p>Smart contract audited by leading security firms</p>
                  </div>
                  <div className="choose-img">
                    <div className="main-fimg">
                      <img src="/img/choose-1 (1).png" alt="" />
                    </div>
                    <h4>Transparent</h4>
                    <p>Fully verified and open-source code</p>
                  </div>
                </div>
                <div className="first-boxs for-padding">
                  <div className="choose-img">
                    <div className="main-fimg">
                      <img src="/img/choose-4.png" alt="" />
                    </div>
                    <h4>Immutable</h4>
                    <p>Contract ownership renounced</p>
                  </div>
                  <div className="choose-img">
                    <div className="main-fimg">
                      <img src="/img/choose-5.png" alt="" />
                    </div>
                    <h4>Sustainable</h4>
                    <p>Mathematically proven ROI model</p>
                  </div>
                </div>
              </div>
              <div className="column bitcoin">
                <div className="main-img">
                  <img src="/img/bitcoin-bimg.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FAQSection />
      <div className="our-blog">
        <div className="container-1470">
          <div className="heading">
            <h2>Our blog</h2>
          </div>
          <div className="row">
            <div className="blog-box">
              <div className="blog-img">
                <img src="/img/blog-img.png" alt="" />
              </div>
              <div className="blog-content">
                <p>What is an BTC (Bit Coin) and how you can buy....</p>
              </div>
            </div>
            <div className="blog-box">
              <div className="blog-img">
                <img src="/img/blog-img.png" alt="" />
              </div>
              <div className="blog-content">
                <p>What is an BTC (Bit Coin) and how you can buy....</p>
              </div>
            </div>
            <div className="blog-box">
              <div className="blog-img">
                <img src="/img/blog-img.png" alt="" />
              </div>
              <div className="blog-content">
                <p>What is an BTC (Bit Coin) and how you can buy....</p>
              </div>
            </div>
            <div className="blog-box">
              <div className="blog-img">
                <img src="/img/blog-img.png" alt="" />
              </div>
              <div className="blog-content">
                <p>What is an BTC (Bit Coin) and how you can buy....</p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </main>
  );
}
