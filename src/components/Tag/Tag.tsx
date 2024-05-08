import React from "react";
import { TagObject } from "../../types/tag";
import styles from "./Tag.module.css";

interface TagProps extends TagObject {
  onClick: () => void;
}

const Tag = React.memo(
  ({ label, onClick, selected }: TagProps) => {
    return (
      <div
        className={`${styles.tag} ${selected && styles.active}`}
        onClick={onClick}
      >
        {label}
      </div>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.selected === nextProps.selected;
  }
);
export default Tag;
