import { useLayoutEffect, useRef, useState } from "react";
import { MessageObject } from "../../types/message";
import styles from "./SystemMessage.module.css";

function SystemMessage({ content }: MessageObject) {
  const [isOverflowing, setIsOverflowing] = useState(false);

  const messageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const node = messageRef.current;
    if (node) {
      const lineHeight = parseFloat(getComputedStyle(node).lineHeight);
      const height = node.clientHeight;
      const lines = height / lineHeight;
      setIsOverflowing(lines > 4);
    }
  }, [content]);

  return (
    <div
      className={`${styles.message} ${isOverflowing ? styles.overflowing : ""}`}
      ref={messageRef}
    >
      {content}
    </div>
  );
}

export default SystemMessage;
