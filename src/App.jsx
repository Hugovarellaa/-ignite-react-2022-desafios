import { Header } from "./components/Header";

import styles from "./App.module.css";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import "./styles/global.css";

const posts = [
  {
    id: 1,
    author: {
      name: "Mayk Brito",
      avatar: "https://avatars2.githubusercontent.com/u/6643122?s=460&v=4",
      role: "Educator @rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galeara 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portita. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-07-18 08:00:00"),
  },
  {
    id: 2,
    author: {
      name: "Diego fernando",
      avatar: "https://github.com/diego3g.png",
      role: "@CTO Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galeara 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portita. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-07-19 18:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}
