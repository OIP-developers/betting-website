import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Footer.module.css";

const Footer = () => {
  return (
    <div className="footer-section">
    <div className="container-1470">
      <div className="footer-row">
        <div className="footer-manubar">
          <h4>Casino</h4>
          <ul>
            <li><a href="#">Teen patti</a></li>
            <li><a href="#">Rummy</a></li>
            <li><a href="#">Plinko</a></li>
            <li><a href="#">Diamond game</a></li>
            <li><a href="#">Andar Bahar</a></li>
            <li><a href="#">Crash game</a></li>
            <li><a href="#">1 slot machine game</a></li>
          </ul>
        </div>
        <div className="footer-manubar">
          <h4>Sports</h4>
          <ul>
            <li><a href="#">cricket betting</a></li>
            <li><a href="#">Football Betting</a></li>
          </ul>
        </div>
        <div className="footer-manubar">
          <h4>Help</h4>
          <ul>
            <li><a href="#">TERMS OF USE</a></li>
            <li><a href="#">COOKIE POLICY</a></li>
            <li><a href="#">PRIVACY POLICY</a></li>
            <li><a href="#">DISCLAIMERS</a></li>
          </ul>
        </div>
        <div className="footer-manubar">
          <h4>Info</h4>
          <ul>
            <li><a href="#">Game Rules</a></li>
            <li><a href="#">Wallet</a></li>
            <li><a href="#">Withdrawal</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>
        <div className="footer-manubar">
          <h4>Socials</h4>
          <ul>
            <li><a href="#">TELEGRAM</a></li>
            <li><a href="#">LINKEDIN</a></li>
            <li><a href="#">TWITTER X</a></li>
            <li><a href="#">REDDIT</a></li>
          </ul>
        </div>
      </div>
      <div className="copy-right-row">
        <p>Copyright © Gaming</p>
      </div>
    </div>
  </div>
  );
};

export default Footer;
