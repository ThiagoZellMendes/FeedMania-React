import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './comment.module.css'
import { Avatar } from './Avatar'

export function Comment({ content, deleteCommment }) {
  return (
    <div className={styles.comment}> 
      <Avatar hasBorder={false} src="https://github.com/ThiagoZellMendes.png" alt=''/> 

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Thiago Mendes</strong>
              <time title='11 de maio às 08:13h' dateTime='2022-05-11 08:13:30'>Cerca de 1h atrás</time>
            </div>
            <button onClick={() => deleteCommment(content)} title='"Deletar Comentário'>
              <Trash size={20} />
            </button>
          </header>

          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}