import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/Hugovarellaa.png"
          />
          <div className={styles.authorInfo}>
            <strong>Hugo Alves Varella</strong>
            <span>Web Development</span>
          </div>
        </div>

        <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:30:00">
          Publicado há 1 hora
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>jane.design/doctorcare</p>
        <p>
          <a href="#">#novoprojeto </a> <a href="">#nlw</a>{" "}
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm} action="">
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Escreva um comentário..." />
        <button type="submit">Comentar</button>
      </form>
    </article>
  );
}
