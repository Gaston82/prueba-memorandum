import styles from "./HomePage.module.css";

const HomePage = () => (
  <main className={styles.mainContent}>
    <div className={styles.titleContainer}>
      <h1 className={styles.title}>Popular Titles</h1>
    </div>
    <div className={styles.categories}>
      <article className={styles.card}>
        <i className={`fa-solid fa-tv ${styles.icon}`}></i>
        <span>Popular Series</span>
      </article>
      <article className={styles.card}>
        <i className={`fa-solid fa-clapperboard ${styles.icon}`}></i>
        <span>Popular Movies</span>
      </article>
    </div>
  </main>
);

export default HomePage;
