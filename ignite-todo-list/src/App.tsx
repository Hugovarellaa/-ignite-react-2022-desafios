import { Header } from "./components/Header";
import { Task } from "./components/Task";

import styles from "./App.module.css";

export function App() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <Task />
      </main>
    </>
  );
}
