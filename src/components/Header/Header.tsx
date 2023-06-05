import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = (): JSX.Element => (
  <header className={styles.header}>
    <Link to={"/"}>
      <span className={styles.headerTitle}>Movies & Series</span>
    </Link>
  </header>
);

export default Header;
