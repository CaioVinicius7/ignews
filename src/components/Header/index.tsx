import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ig,news" />
        <nav>
          <a href="#" className={styles.active}>
            {" "}
            home{" "}
          </a>
          <a href="#"> news </a>
        </nav>
      </div>
    </header>
  );
}
