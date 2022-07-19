import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/Hugovarellaa.png" />

      <div className={styles.commentBox}>
        <div className={styles.CommentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Hugo Varella</strong>
              <time title="11 de Maio às 08:00h" dateTime="2022-05-11 08:00:00">
                Cerca de 2h atrás
              </time>
            </div>
            <button title="Deleta comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
