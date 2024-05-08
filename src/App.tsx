import Dialog from "./components/Dialog/Dialog";
import dialogTest from "./data/dialog.json";

import styles from "./App.module.css";

function App() {
  const dialog = dialogTest;

  return (
    <div className={styles.wrapper}>
      <Dialog dialog={dialog} />
      {/* <Tags tags={tagsTest} /> */}
    </div>
  );
}

export default App;
