import { MessageObject } from "../../types/message";
import styles from "./Message.module.css";

interface MessageProps {
  message: MessageObject;
}

function Message({ message }: MessageProps) {
  return (
    <div
      className={`${styles.message} ${
        message.role === "user" ? styles.messageUser : styles.messageAssistant
      }`}
    >
      {message.content}
    </div>
  );
}

export default Message;
