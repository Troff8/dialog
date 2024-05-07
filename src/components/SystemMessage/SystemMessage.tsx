import { useLayoutEffect, useRef, useState } from "react";
import styles from "./SystemMessage.module.css";

function SystemMessage({ message }: { message: string }) {
  const [isOverflowing, setIsOverflowing] = useState(false);

  const messageRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const node = messageRef.current;
    if (node) {
      const lineHeight = parseInt(window.getComputedStyle(node).lineHeight);
      const scrollHeight = node.scrollHeight;
      const lines = Math.ceil(scrollHeight / lineHeight);
      setIsOverflowing(lines > 4);
    }
  }, [message]);

  return (
    <div
      className={`${styles.systemMessage} ${
        isOverflowing ? styles.overflowing : ""
      }`}
      ref={messageRef}
    >
      {message}
    </div>
  );
}

export default SystemMessage;
