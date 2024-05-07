import Dialog from "./components/Dialog/Dialog";

import dialogTest from "./data/dialog.json";
import tagsTest from "./data/tags.json";

import styles from "./App.module.css";
import { sortTags } from "./utils/sortTags";
import Tags from "./components/Tags/Tags";
import { MessageObject } from "./types/message";

function App() {
  const tags = sortTags(tagsTest);
  const dialog: MessageObject[] = dialogTest;
  return (
    <div className={styles.wrapper}>
      <Dialog dialog={dialog} />
      <Tags tags={tags} />
    </div>
  );
}

export default App;
