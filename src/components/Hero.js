// components/Hero.js
import styles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.textContainer}>
        <h1>Grow with our Email Marketing Platform & CRM suite</h1>
        <p>
          All-in-one platform to manage your customer relationships via Email,
          SMS, Chat and more
        </p>
        <button className={styles.ctaButton}>Sign up free</button>
      </div>
      <div className={styles.imageContainer}>
        <img
          src="../public/email-marketing-screenshot.png"
          alt="Email marketing screenshot"
          className={styles.heroImage}
        />
      </div>
    </section>
  );
}
