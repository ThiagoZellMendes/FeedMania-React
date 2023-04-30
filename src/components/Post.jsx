import { useState } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState(["Post muito bacana, heim?!"]);
  const [newCommentText, setNewCommentText] = useState("");

  function handleCreateNewComment() {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText('')
  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/ThiagoZellMendes.png" />
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

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
        name='comment'
        placeholder='Deixe um comentário'
        value={newCommentText}
        onChange={handleNewCommentChange} 
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return <Comment key={Math.random()} content={comment} />;
        })}
      </div>
    </article>
  );
}
