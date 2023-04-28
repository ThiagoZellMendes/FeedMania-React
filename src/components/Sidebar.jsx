import { Avatar } from "./Avatar";
import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNvZGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/ThiagoZellMendes.png" />
        <strong>Thiago Mendes</strong>
        <span>Mobile Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
