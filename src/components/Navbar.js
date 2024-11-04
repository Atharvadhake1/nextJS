// components/Navbar.js
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <span className={styles.brand}>Brevo</span>
        <span className={styles.subtext}>Formerly Sendinblue</span>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="#">Products</Link>
        </li>
        <li>
          <Link href="#">Pricing</Link>
        </li>
        <li>
          <Link href="#">Resources</Link>
        </li>
      </ul>
      <div className={styles.actions}>
        <Link href="#" className={styles.login}>
          Log in
        </Link>
        <Link href="#" className={styles.signUp}>
          Sign Up Free
        </Link>
        <Link href="#" className={styles.demo}>
          Get a demo
        </Link>
      </div>
    </nav>
  );
}
