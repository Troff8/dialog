import Dialog from "./components/Dialog/Dialog";
import dialogTest from "./data/dialog.json";

import styles from "./App.module.css";
import ResizableBox from "./components/ResizableBox/ResizableBox";
import { useState } from "react";

function App() {
  const dialog = dialogTest;
  const [open, setOpen] = useState(false);

  return (
    <div
      className={styles.wrapper}
      onClick={() => {
        setOpen(!open);
      }}
    >
      <ResizableBox
        childOne={<Dialog dialog={dialog} />}
        childTwo={
          <div
            style={{
              background: "grey",
              padding: 10,
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            voluptas esse nobis doloremque corrupti modi laboriosam accusantium
            nihil possimus eveniet ullam assumenda aliquid, culpa minus
            perferendis expedita, impedit tenetur. Quia! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Magni illo, voluptatibus
            mollitia, alias voluptates molestias tempora ex adipisci eaque quam
            tempore temporibus, aut dolores accusantium. Atque ullam quibusdam
            reiciendis laborum. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Molestias alias reiciendis non corrupti similique
            eligendi facilis animi necessitatibus, repellat culpa quo. Modi
            doloremque exercitationem, excepturi quo pariatur tempore cupiditate
            quis. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Beatae iusto at numquam magni tempora provident, velit accusantium,
            similique minima placeat, maxime nisi voluptate. Blanditiis tempore
            facilis quia magnam quibusdam dolores. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Officia, magni. Odit consectetur nulla
            nisi, expedita atque laudantium enim soluta deserunt modi, beatae
            delectus quidem quibusdam. Earum quaerat adipisci excepturi dolorem.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            assumenda corrupti molestias ipsa laboriosam, molestiae delectus
            praesentium quaerat porro doloremque repudiandae ratione pariatur,
            aspernatur aut quia ullam inventore explicabo. Ea.
          </div>
        }
        maxSize={1000}
        minSize={200}
        opened
        fixed
      ></ResizableBox>
      {/* <Tags tags={tagsTest} /> */}
    </div>
  );
}

export default App;
