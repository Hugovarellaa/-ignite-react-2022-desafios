import logoImg from "../../../public/ignite-feed-logo.svg";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <img src={logoImg} alt="" />
      <strong>Ignite Feed</strong>
    </header>
  );
}
