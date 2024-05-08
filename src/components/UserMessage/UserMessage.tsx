import { MessageObject } from "../../types/message";
import styles from "./UserMessage.module.css";

function UserMessage({ content }: MessageObject) {
  return <div className={styles.message}>{content}</div>;
}

export default UserMessage;
