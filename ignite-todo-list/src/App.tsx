import { Header } from "./components/Header";
import { Task } from "./components/Task";

import styles from "./App.module.css";
import { NewTask } from "./components/NewTask";

export function App() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <NewTask />
        <Task />
      </main>
    </>
  );
}
