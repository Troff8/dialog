import { useEffect, useState } from "react";
import Tag from "../Tag/Tag";
import { sortTags } from "../../utils/sortTags";
import { TagObject } from "../../types/tag";

import styles from "./Tags.module.css";

interface TagsProps {
  tags: TagObject[];
}

function Tags({ tags }: TagsProps) {
  console.log("render tags");
  const [selectedTags, setSelectedTags] = useState<TagObject[]>([]);

  useEffect(() => {
    setSelectedTags(sortTags(tags));
  }, [tags]);

  const handleTagClick = (tag: TagObject) => {
    setSelectedTags((prevSelectedTags) =>
      prevSelectedTags.map((t) =>
        t.name === tag.name ? { ...tag, selected: !tag.selected } : t
      )
    );
  };
  return (
    <div className={styles.tags}>
      {selectedTags.map((tag, index) => (
        <Tag
          key={index}
          tag={tag}
          onClick={() => handleTagClick(tag)}
          selected={!!tag.selected}
        />
      ))}
    </div>
  );
}

export default Tags;
