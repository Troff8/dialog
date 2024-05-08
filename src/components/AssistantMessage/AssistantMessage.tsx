import { MessageObject } from "../../types/message";
import styles from "./AssistantMessage.module.css";

export default function AssistantMessage({ content, label }: MessageObject) {
  return (
    <div className={`${styles.message} ${label && styles.messageLabel}`}>
      {label && <div className={styles.label}>{label}</div>}
      {content}
    </div>
  );
}
