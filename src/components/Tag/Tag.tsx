import React from "react";
import { TagObject } from "../../types/tag";
import styles from "./Tag.module.css";

interface TagProps {
  tag: TagObject;
  onClick: () => void;
  selected: boolean;
}

const Tag = React.memo(
  ({ tag, onClick, selected }: TagProps) => {
    return (
      <div
        className={`${styles.tag} ${selected && styles.active}`}
        onClick={onClick}
      >
        {tag.label}
      </div>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.selected === nextProps.selected;
  }
);
export default Tag;
