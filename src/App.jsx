import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/SideBar";

import styles from "./App.module.css";

import "./global.css";


function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Thiago Mendes" content="Melhor de todos!" />
          <Post author="Karana Chughi" content="Melhor de todas!" />
        </main>
      </div>
    </div>
  );
}

export default App;
