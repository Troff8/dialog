import { useLayoutEffect, useRef, useState } from "react";
import { MessageObject } from "../../types/message";
import styles from "./SystemMessage.module.css";

interface SystemMessageProps {
  message: MessageObject;
}
function SystemMessage({ message }: SystemMessageProps) {
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
  }, [message]);

  return (
    <div
      className={`${styles.message} ${isOverflowing ? styles.overflowing : ""}`}
      ref={messageRef}
    >
      {message.content}
    </div>
  );
}

export default SystemMessage;
