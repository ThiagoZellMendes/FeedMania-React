import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/ThiagoZellMendes.png"
          />
          <div className={styles.authorInfo}>
            <strong>Thiago Mendes</strong>
            <span>Mobile Developer</span>
          </div>
        </div>
        <time title="11 de Maio às 08:50h" dateTime="2022-05-11 08:20:50">
          Publicado há 2h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala meu povo</p>
        <p>
          Mano ta hard terminar essa task, mas eu envio ela ainda hoje. prometo
          🌝
        </p>
        <p>
          <a href="">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#AgoraVai!</a> <a href="">#RumoAoSenio</a>{" "}
          <a href="">#obrigadoRocketSeat</a>{" "}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
