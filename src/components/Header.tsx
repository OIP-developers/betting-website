import Link from 'next/link';

const Header = () => {
  return (
    <header>
          <div className="container-1470">
              <div className="row">
                  <div className="header-logo">
                      <img src="/img/logo-img.png" alt="" />
                  </div>
                  <div className="ManuBar">
                      <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><a href="#">Documentation</a></li>
                        <li><a href="#">Audit</a></li>
                        <li><Link href="/faq">FAQ</Link></li>
                        <li><Link href="/blog">Blog</Link></li>
                        <li><a href="#">Contract</a></li>
                      </ul>
                    </div>
                    <div className="button">
                      <a href="#">Connect Wallet <img src="/img/Vector - 2025-02-13T142841.083.png" alt="" /></a>
                    </div>
              </div>
          </div>
      </header>
  );
};

export default Header;
