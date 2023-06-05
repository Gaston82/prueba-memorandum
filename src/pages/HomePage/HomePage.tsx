import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <main className={styles.mainContent}>
      <article className={styles.card}>
        <i className={`fa-solid fa-tv ${styles.icon}`}></i>
        <span>Popular Series</span>
      </article>
      <article className={styles.card}>
        <i className={`fa-solid fa-clapperboard ${styles.icon}`}></i>
        <span>Popular Movies</span>
      </article>
    </main>
  );
};

export default HomePage;
