import { MessageObject } from "../../types/message";
import styles from "./AssistantMessage.module.css";

interface AssistantMessageProps {
  message: MessageObject;
}

export default function AssistantMessage({ message }: AssistantMessageProps) {
  return (
    <div
      className={`${styles.message} ${message.label && styles.messageLabel}`}
    >
      {message.label && <div className={styles.label}>{message.label}</div>}
      {message.content}
    </div>
  );
}
