import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.container}>
        
        {/* Top Row: Logo & Connect Wallet */}
        <div className={styles.rowFooter}>
          <div className={styles.footerLogo}>
            <Image src="/img/footer-logo.png" alt="Luck Box Logo" width={235} height={100} />
          </div>
          <div className={styles.button}>
            <Link href="#">
              Connect Wallet
              <Image src="/img/Vector.png" alt="Wallet Icon" width={10} height={9} />
            </Link>
          </div>
        </div>

        {/* Middle Row: Footer Text & Navigation */}
        <div className={styles.footerManurow}>
          <div className={styles.footerP}>
            <p>
              If they predict the next 4h candle correctly, 0/1 percent will be added to their 
              daily profit and they can repeat it 5 times.
            </p>
          </div>

          {/* Navigation Links */}
          <div className={styles.footerManuBar}>
            <div className={styles.subManubox}>
              <h4>Sitemap</h4>
              <ul>
                <li><Link href="/documentation">Documentation</Link></li>
                <li><Link href="/audit">Audit</Link></li>
                <li><Link href="/faq">FAQ</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className={styles.subManubox}>
              <h4>Legal</h4>
              <ul>
                <li><Link href="/terms">TERMS OF USE</Link></li>
                <li><Link href="/cookie-policy">COOKIE POLICY</Link></li>
                <li><Link href="/privacy-policy">PRIVACY POLICY</Link></li>
                <li><Link href="/disclaimer">DISCLAIMERS</Link></li>
              </ul>
            </div>
            <div className={styles.subManubox}>
              <h4>Socials</h4>
              <ul>
                <li><Link href="#">TELEGRAM</Link></li>
                <li><Link href="#">LINKEDIN</Link></li>
                <li><Link href="#">TWITTER X</Link></li>
                <li><Link href="#">REDDIT</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.copyrightRow}>
          <p>Copyright © Luck Box</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
