import { useEffect, useState } from "react";
import Tag from "../Tag/Tag";
import { sortAlphabet } from "../../utils/sortTags";
import { TagObject } from "../../types/tag";

import styles from "./Tags.module.css";

interface TagsProps {
  tags: TagObject[];
}

function Tags({ tags }: TagsProps) {
  const [selectedTags, setSelectedTags] = useState<TagObject[]>([]);

  useEffect(() => {
    const sortedTags = tags.sort(sortAlphabet((item: TagObject) => item.label));
    setSelectedTags(sortedTags);
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
