import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}> 
      <img src="https://github.com/ThiagoZellMendes.png" alt=''/> 

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Thiago Mendes</strong>
              <time title='11 de maio às 08:13h' dateTime='2022-05-11 08:13:30'>Cerca de 1h atrás</time>
            </div>
            <button title='"Deletar Comentário'>
              <Trash size={20} />
            </button>
          </header>

          <p>Muito bom Karana, parabéns</p>
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