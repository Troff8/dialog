import { useMemo, useState } from "react";
import { TagObject } from "../../types/tag";
import styles from "./Tag.module.css";

interface TagProps {
  tag: TagObject;
}

function Tag({ tag }: TagProps) {
  const [select, setSelect] = useState(tag.selected);

  const label = useMemo(() => {
    return tag.label.length > 20 ? `${tag.label.slice(0, 20)}...` : tag.label;
  }, [tag]);

  const handleClick = () => {
    setSelect(!select);
  };

  return (
    <div
      className={`${styles.tag} ${select && styles.active}`}
      onClick={handleClick}
    >
      <span>{label}</span>
    </div>
  );
}

export default Tag;
