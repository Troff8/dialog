import { useState } from "react";
import { TagObject } from "../../types/tag";
import styles from "./Tag.module.css";

interface TagProps {
  tag: TagObject;
}

function Tag({ tag }: TagProps) {
  const [select, setSelect] = useState(tag.selected);

  const handleClick = () => {
    setSelect(!select);
  };

  return (
    <div
      className={`${styles.tag} ${select && styles.active}`}
      onClick={handleClick}
    >
      {tag.label}
    </div>
  );
}

export default Tag;
