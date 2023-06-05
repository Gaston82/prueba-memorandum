import styles from "./Footer.module.css";

const Footer = (): JSX.Element => (
  <footer className={styles.footer}>
    <div className={styles.socialContainer}>
      <i className="fa-brands fa-square-instagram"></i>
      <i className="fa-brands fa-square-facebook"></i>
      <i className="fa-brands fa-square-twitter"></i>
    </div>
    <p>Copyright © 2023 Movies & Series. All rights reserved.</p>
  </footer>
);

export default Footer;
