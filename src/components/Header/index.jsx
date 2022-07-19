import igniteLogo from "../../assets/ignite-logo.svg";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <img src={igniteLogo} />
      <span>Ignite Feed</span>
    </header>
  );
}
