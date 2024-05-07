import Dialog from "./components/Dialog/Dialog";

import { dialogTest } from "./data/dialog";
import { tagsTest } from "./data/tags";

import styles from "./App.module.css";
import { sortTags } from "./utils/sortTags";
import Tags from "./components/Tags/Tags";

function App() {
  const tags = sortTags(tagsTest);
  return (
    <div className={styles.wrapper}>
      <Dialog dialog={dialogTest} />
      <Tags tags={tags} />
    </div>
  );
}

export default App;
