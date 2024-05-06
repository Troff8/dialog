import Dialog from "./components/Dialog/Dialog";
import Tag from "./components/Tag/Tag";

import { dialogTest } from "./data/dialog";
import { tagsTest } from "./data/tags";

import styles from "./App.module.css";
import { sortTags } from "./utils/sortTags";

function App() {
  const tags = sortTags(tagsTest);
  return (
    <div className={styles.wrapper}>
      <Dialog dialog={dialogTest} />
      <div className={styles.tags}>
        {tags.map((tag, index) => (
          <Tag key={index} tag={tag} />
        ))}
      </div>
    </div>
  );
}

export default App;
