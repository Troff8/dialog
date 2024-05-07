import { MessageObject } from "../../types/message";
import styles from "./AssistantMessage.module.css";

interface AssistantMessageProps {
  message: MessageObject;
}

function AssistantMessage({ message }: AssistantMessageProps) {
  return <div className={styles.message}>{message.content}</div>;
}

export default AssistantMessage;
