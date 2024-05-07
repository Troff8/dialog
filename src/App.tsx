import Dialog from "./components/Dialog/Dialog";

import dialogTest from "./data/dialog.json";
import tagsTest from "./data/tags.json";

import styles from "./App.module.css";
import Tags from "./components/Tags/Tags";
import { MessageObject } from "./types/message";

function App() {
  const dialog: MessageObject[] = dialogTest;
  return (
    <div className={styles.wrapper}>
      <Dialog dialog={dialog} />
      <Tags tags={tagsTest} />
    </div>
  );
}

export default App;
