import { Header } from "./components/Header";

import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";
import "./styles/global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>Post</main>
      </div>
    </div>
  );
}
