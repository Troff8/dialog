import { MessageObject } from "../../types/message";
import styles from "./UserMessage.module.css";

interface UserMessageProps {
  message: MessageObject;
}

function UserMessage({ message }: UserMessageProps) {
  return <div className={styles.message}>{message.content}</div>;
}

export default UserMessage;
