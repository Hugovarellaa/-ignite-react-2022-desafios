import styles from ".//App.module.css";
import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import "./styles/global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.appWrapper}>
        <aside>
          <Sidebar/>
        </aside>
        <main>
          <Post />
          <Post />
          <Post />
        </main>
      </div>
    </div>
  );
}
