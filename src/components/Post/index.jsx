import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.postContainer}>
      <header>
        <div className={styles.author}>
          <img
            src="https://github.com/Hugovarellaa.png"
            className={styles.avatar}
          />
          <div className={styles.authorInfo}>
            <strong>Hugo Varella</strong>
            <span>Web Development</span>
          </div>
        </div>
        <time
          title="05 de Maio de 2022 às 08:00h"
          dateTime="2022-05-01 08:00:00"
        >
          Públicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeara 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portita. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          <a href="#">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto</a> {" "}
          <a href="#">#nlw </a>{" "}
          <a href="#">#rocketseat</a>
        </p>
      </div>
    </article>
  );
}
